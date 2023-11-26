import { mount } from '@vue/test-utils';
import Product from '@/components/Product.vue';

describe('Product.vue', () => {
  it('renders with correct data', () => {
    const wrapper = mount(Product);

    // Title verification
    expect(wrapper.find('.title').text()).toBe('Product Title');

    // Description verification
    expect(wrapper.find('.description').text()).toBe('Product Description');

    // Image verification
    expect(wrapper.find('.image').attributes('src')).toBe('https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg');
  });
});
/*para correr os testes falta correr o codigo
1 - npm install --save-dev babel-jest @babel/core @babel/preset-env
2 - criar um ficheiro babel.config.js na raiz do projeto e colocar
{
    "presets": ["@babel/preset-env"]
  }
3 - npm install --save-dev @vue/test-utils
*/
