document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  const allBtn = document.getElementById('all-btn');

  buttons.forEach((button) => {
    if (button !== allBtn) {
      button.addEventListener('click', function () {
        let num = 0;
        allBtn.classList.remove('selected');
        this.classList.toggle('selected');
        for (let item of buttons) {
          if (item.className === 'selected') {
            num += 1;
          }
        }
        if (num === 0) {
          allBtn.classList.add('selected');
        }
        const categories = getSelectedCategories();
        filterAndDisplayData(categories);
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', (event) => {
      event.preventDefault();
      window.location.href = '../../index.html'; // index.html로 이동
    });
  });

  allBtn.addEventListener('click', () => {
    allBtn.blur();
    buttons.forEach((button) => {
      if (button !== allBtn) {
        button.classList.remove('selected');
      }
    });
    allBtn.classList.add('selected');
    filterAndDisplayData(null);
  });

  function getSelectedCategories() {
    const selectedCategories = [];
    buttons.forEach((button) => {
      if (button !== allBtn && button.classList.contains('selected')) {
        selectedCategories.push(button.textContent);
      }
    });
    return selectedCategories;
  }

  function filterAndDisplayData(categories) {
    $.getJSON('../data/PXhot.json', (data) => {
      let filteredData = data;
      if (categories !== null && categories.length > 0) {
        filteredData = data.filter((item) => {
          for (const category of categories) {
            if (item.ca.includes(category)) {
              return true;
            }
          }
          return false;
        });
      }

      filteredData.sort((a, b) => b.hot - a.hot);

      const productContainer = document.getElementById('product-container');
      productContainer.innerHTML = '';

      let productRow = document.createElement('div');
      productRow.classList.add('product-row');
      productContainer.appendChild(productRow);

      filteredData.forEach((item, index) => {
        if (index > 0 && index % 4 === 0) {
          productRow = document.createElement('div');
          productRow.classList.add('product-row');
          productContainer.appendChild(productRow);
        }

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.dataset.ca = Array.isArray(item.ca)
          ? item.ca.join(', ')
          : item.ca;
        productItem.addEventListener('mouseenter', function () {
          const children = this.children;
          for (let i = 0; i < children.length; i++) {
            if (
              children[i].classList.contains('product-image') ||
              children[i].classList.contains('product-name') ||
              children[i].classList.contains('product-hot')
            ) {
              children[i].style.transition = '0.5s';
              children[i].style.opacity = '0';
            }
          }
          const caDisplay = document.createElement('div');
          caDisplay.textContent = this.dataset.ca;
          caDisplay.classList.add('ca-display');
          this.appendChild(caDisplay);
        });
        productItem.addEventListener('mouseleave', function () {
          const children = this.children;
          for (let i = 0; i < children.length; i++) {
            if (
              children[i].classList.contains('product-image') ||
              children[i].classList.contains('product-name') ||
              children[i].classList.contains('product-hot')
            ) {
              children[i].style.transition = '0.5s';
              children[i].style.opacity = '1';
            }
          }
          const caDisplay = this.querySelector('.ca-display');
          if (caDisplay) {
            this.removeChild(caDisplay);
          }
        });
        productRow.appendChild(productItem);

        const productImage = document.createElement('img');
        productImage.src = 'img/' + item.name + '.png';
        productImage.alt = item.name;
        productImage.classList.add('product-image');
        productItem.appendChild(productImage);

        const productName = document.createElement('div');
        productName.textContent = item.name;
        productName.classList.add('product-name');
        productItem.appendChild(productName);

        const productHot = document.createElement('div');
        productHot.textContent = 'HOT: ' + item.hot;
        productHot.classList.add('product-hot');
        productItem.appendChild(productHot);
      });
    });
  }

  filterAndDisplayData(null);

  const topButton = document.getElementById('top-btn');

  window.addEventListener('scroll', () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      topButton.style.display = 'block';
    } else {
      topButton.style.display = 'none';
    }
  });

  topButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
});
