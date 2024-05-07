class Product {
  // title = "Defaul Title";
  // imageUrl;
  // description;
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ElementAttribute {
  constructor(attrName, attrValue) {
    this.name = attrName;
    this.value = attrValue;
  }
}

class Component {
  constructor(renderHookId) {
    this.hookId = renderHookId;
  }

  createRootElement(tag, className, attributes) {
    const rootElement = document.createElement(tag);
    if (className) {
      rootElement.className = className;
    }
    if (attributes && attributes.length > 0) {
      for (const attr of attributes) {
        rootElement.setAttribute(attr.name, attr.value);
      }
    }
    document.getElementById(this.hookId).append(rootElement);
    return rootElement;
  }
}

class ShoppingCart extends Component {
  items = [];
  constructor(hookId) {
    super(hookId);
  }
  addProudct(product) {
    const updatedItmes = [...this.items];
    updatedItmes.push(product);
    this.cartItems = updatedItmes;
  }
  set cartItems(value) {
    this.items = value;
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
  }
  get totalAmount() {
    const sum = this.items.reduce((preValue, curItem) => preValue + curItem.price, 0);
    return sum;
  }
  render() {
    const cartEl = this.createRootElement("section", "cart");
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now</button>
    `;
    this.totalOutput = cartEl.querySelector("h2");
  }
}

class ProductList extends Component {
  products = [
    new Product(
      "A Pillow",
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUTExIVFRUVFRUXFRUVFRUWFxUVFRYYFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFRAQFysdFR0rKystLSsrKy0rKy0tKystKy0tLS0tLS0tLSstLSstLS0tLSstKy0rKysrLSsrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAD8QAAEDAgMFBAcFBwUBAQAAAAEAAhEDIQQxQQUSUWFxBoGR8BMiMqGxwdEUFUJS4QcjYnKCkvFDU6KywhYz/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAbEQEBAQEBAQEBAAAAAAAAAAAAARECEjEhYf/aAAwDAQACEQMRAD8Al2ziC4tY0EtBaSRqS0jw+qrNpuv6ucwbZhS7x94Vhml4sVufjNVmg7x9UyS05cQB8lI6nO76ptI17teSsDMnkFIHXPX9FdRFTpkccuJUNIu/Kc3A95Vxx/6lJpv4fAJq4rioZkARE87TyRSQ4mNQYt+JWKY05lT4SkDE8j4JaYqswT3RDdCJJV2ls903IEgExJMjRau4EbWrHqtYoYHChgFp5lWwDGfngpQEgLqKhFMKVlEEEciPFEGqamEHN4elfLyFZru3WudwBKcNhzr/AIj8U2KEsI5FdY51kbSxDaNOXWAZM8TYCO5pVnB4z0dAOeYe/wBZ3GToOgt3LlO39QmphWT6r3gEdCDn4o8fiS5/Jth11WemuY6sbdgSGWEQCe4KSttA1IkDNcxSr2A4kLSoVLd1vMqRWuysJy/RWWYzS0CBfj5Kyg+/eB4BSscbc5JVxGu3GjhnqEdCs0KnhaBPSFoU6AGizcVFUxTBa8wRCEY4DTmrbqYNiAc81UrbOB9kxYWNxrlwSYKdQTcuPnQIXUsrnO2XBHiKTmEAjXPTxUQf9Vpkfo+enBC+gDrqPinDvh9UW95sqhxQHHVV3YQkk70SI8FYY7rnyRSggGHN/Wz5Ihg3lwg8dNCpR8lKyqQZT9RX+638QktIYpvNOptayOMq0H04D2x62ehtoZRgyBY5Hj8it172uG64SDmCsrFbNcL0iHC/qnMTwOqTpbAD6cVI3M/zedFTbWIdBBBETYfMqdta5zz4LTJ8TiNxm8RNogRJJMACdSSj2NNWPSljC7JrTvbo/ieYk9BHMqvjae+yMyDI6tMx8u9Ng67eOUW4dRxXLvqyunMli5jhVpVd0UKlVhv6SnuOAniCQfCVYp7wAO64W1aR8VpYJxaM5vPkq6Kkq+ksZ9DHiPWtldX6bwcipKlJjhdrT3X8VTqbPYQd2Q8XEfRPwW2hFCzMJQqRPpPCT8VbZhqn+57h9FFWQFKwLNBqXO/YHhmp2b35j/xhBQe4Sf5j8VBi6nqm+keNlKaLwAXQC4n9T0UdbBve2ABeM9IK6SxjK8+7c15rYYHSq0jxAKW9MmNfMlb21uwvp6rX1K7hukEBrARx9on5LfwvZ8Mbuh0iNYBcecCFm1qRxVB8kddf1Wvh6lhlZbtHszQmS1wOcbx+WSvU9h0BI3SY/jdEqSq59j/iT5stHAAOjWy0qOw6ZzbHCHO+qlZgqbXloaQAeJv4q+kwbcvBSAofQXyt1KOlhw21zJzN+66ypwmc8DMgdSFIaA3TYIWUREboHcL9UENbG02iS8d1z4CSVm4prqoPoKUGfbedxv8AaJcfBvVbX2RhI3gDu3HVWcDhoLnRmbIjlf8A53FkScS0W9ltL3SSSuNwnaurQr1aOKghj2tBEbwkB0iPaFxzuvYsSDunTpn4riO13ZX0v72jAqwGkmIcBkDwzdfyGmLlNwIBFwbgjUFF582WdsLBVqNLdrZ7xIyIAsYBB4z4rS86rpGKaPgnIShPCqGhJF3JIOaZtNW6W0MlyDXIvtBaJnQrz69GLuP2kDWqHSY00EfJSUcfz4Li6uKdJN79NUdPHuH+F0lc7HctxU+P1UGOZvwQd14ycBw0dxC5mjtXzBV3DbRDnNE2JA1yJurbLCR3uzcZu+q42K12mMslzQgdOC18BiBlNlzlbsa9OojiXbwVam5WGOVZTTH6JpOaZE1ADmRHMmfkkGW6SUYCR+KCsaZqlh4WPTOVI8bri3SbKWk3d8UOOZdnVAO6iDFJupwEAlqJrZM8UUI2NsqAqHdZOshAWS8uGsI69xCJoiyAHNuiIRgJAIB3VIGImtUrWoAZTCmvokGowiIzQnMyoMez1O8fFXYVbGi3eEGHtX8I6n4D6qgtrE4VrzJnu6lB93s5+K3L+M2frJlHK1Pu5nPxTfdzIzPir6iYy483SWs3At4lJPUMeQKLEvhrjyPBSNCgxjSWEASTbxXnehzdV3mEJdx+a02bFqH2iG20kq5T2I0ZueT4Ba2MZWFvjj8Vpdni12IpAmROU8jHvhbFLZ1IRDB3gn4q9haYDmBrR7bdOal6anLdcD1U+GcRfcPUKFys4ZrtCDyUi1r4ZwIzVxhWdh3EZhXqZW2KstKMKJqlCIdO1ME4QOQnIlIIgqEAnASCJAzQjKYJIGATtCcJwEDI2tSARtCB2qRoQgKRqIIBEEwRAIHVPHaDWZ8B+oV0rOxbvWPIAd5Mn4BBXYLBGnKSoSSSSIcJk6ZB4tTaAIAgdT80QHxRQeKW6dfguDuQaOKJoEZ6JgzmjaxAQj4KfDiXs/mHuuoN3zdWMC2ajeRJvrY2CDYerGGDeYUDlawwHFbiVpUZ4yrrAqOGBCvMK0xUzUbUARBEGESFqIIDCJCEQVDhOmCdA4TpBOECARAJBOEDgI2hMEQRBAKRrULUYCAxCQakAnlAxWWCHEwbySW68BboAtWVzVai9ziRIM55e9BoEJ1HQa4NAcd4xmpFQkgkkiHSSTIPGWxoQU4nSFzOGxrmH1STyMEeC06G2Wk+s2LaAELleXWdNXedwTBxjJR0cbTcBDh0yKsAjr4rLSMNPuV7Zjf3gkZAkX1iFVc8DyVb2UZqCD+EzzRWs5T0AOChcrWGW4zWjhyrlMqpRAORVpgWmKmCMFRSjaiJQjCBqkCAgnCZOqCCIIQiCBwiCYJBAQRBCEQQGETQhCkaiDajCAIwgIJwmBToGcsCrjN1xEWDj77rdq1QASTkuSqvkk8YM8VrmJa0mY1h1jqphVaciNViT8U0q+WfTfSCxGVHDInxKkZjH29bxCeV1rpLLGPdy8ElPNNeMu2I7R4Oebf1VPEbNqMG8SyMoE/RdDvqjtmuBTiTdcpa7WRg1AeWmRKTajhMOcL6GFE58+7RO+oJsdVpla+31QP/ANHX47pXS9kMS973bxndZ/2OvguQdU+BXXdhhJe7k0Wy43WbGpXVOVjDkjSVXIVvDFIVo0GDMWVpiq0yrDFpipEbULQjAQSNUjVEFIEEgToU4VBhEhCdAQThCEQQEEYQhEEQYRBACjagMIwEARtQG3on7kwRIKO2Ku7ScTwy6X+S5emfV/pGnJdfi2SxwPBcgREjhI4ZLXLPRb3mU5QNJ8xCIHzC2yJMDZLVMCqgg7okhabf4TIPJTtRuvzWftXaQe0AEdypPwjjm9x74+Cifs2dT3leaR6LUbqvMeKL0t89eSD7p5pvuk/mK0ymD13vYAfuXn+MDwaPquTw3ZneaHCq6CJXa9jMD6Gk9kk+vvSeYAj3e9Zt1uRuDNWqLVXspaEuIA7+iFaVFWmBQMN4Gmas0wtMVIAiCYIgEBBEEKIKgwUQQBPKCRIFDKGUEsqRqqNqSSrNMoJQnQSnlEGCjaVECjaUEwUjeqhCMIJgiUbXI5QNUEhef47aDGVHtdUYHAutvAG+Vl6EQuK2vhWekdNIOMzJaDPeQtcfWevjNG0mwfXZOkkZlSsxZ5aa/qoK2z6OZwrTkIDAfdCOnsjBlwmgGmDdrXNibe0ALrownOKOdjeE9PEEoW7CoA+q+uRoN57gL29qbp/uVp9jEVWHQOYyP+immU9PEWyHuSVR+z6oMfaDbixspKjym3L3JErar7CDcnOHUT8IVGrsqoMod0JB8CV5tejFIoCFJWpOb7TXDqD8VFvDzb6Ko6PY1SaQHAkHxn5ro9iGzu5ee4ba7cPJdJkWYMyeM5NHNdV+z/HPrtr1H/na1oGTQGzHP2s1nG9dQtPAUSLAXtPTNVcPRk5aha9aoKYd+YiOk2jwWozaja4NJAudeZOQVikOOap4RubirVB1ieRWmUgKlCrYV1pOuSnLr9QfcUBBOEDSjCAwhn3od5GDJbyKBEpnusoS+HuB4yEZcgZgiB4q0HKm4w0u5o21kFvfThyqB6kp1ERaa5SNKqNqKVr0FoFSAqtTfeOSlaUE7VIFC0qQIJFz+26cPniFvgrG7QP9Zg4zB53IHgCrPqX4yCUk5EpALowGUQrOH4lIK0fhB7lO3EsP4YPRQVvtLv4fBJXRXp8Qkm/xXI4rATosDG4JzDlZd46hPgq+I2eHaLjY6zp5646HmsPbzWMpOe1sOsBBgXMSQu82n2fObB3LjNv4B+6WkEdR3rOY19cKZdxJJ6kleq/swwrmYZ+8ILqpIBzgMaLjS8rK7L9m2+hbWdcvE9G8Pr5j0nZeFZSaXuLWsF7wAOpyCv1Mz9aWDpCm3eOY+JyVJ7t7Pj8Vj7Q7dYIEUxWBGe80FzSb2kBVa3bTBNBPpCcohj7k6ZLbLqW/l5I3kt3ANQVxT/2h4YAbjKrzrFMweXrRdUK/7RXD2MJVMG29DYPUTyVxNeiYqoIYWn2ZaRwKVPETHJeVf/Z44kkYUwTlPePw9VapdqtoEwMKJ5u6cW80wepB36dEQqWEalecUdt7Wd7OHpZ6kmOOQUv2/bJ/0qOf8fLg5QeiMeJ96ipVdeK8+dj9sf7dAcz6SB/zWVW7Q7WPsspEXu1r47pcg9SxD5eOcIRXk8l5LW21tc29UTcQ34TKo09pbWYIDrZ+yzPwVyj2p2Jlrm8CCOgzUTawiJ4R9F4sdu7VBmXf2tv4dVI3tdtJsfuwf6Xn/wBIPaRWzUra1x50XjdLt7jWxvUC7lDhP/FaeH/aZEb+HqDoPqVB6tTq2HRSGovOsN+0nCEjeLmnQFrveYgLWpdusGf9dg6ub8JQdk2tIdxDWnwKtHEbsbwsciuLo9sMHvAjE0zIiA6c+K6DZ21qWIpODHNcWcDog3adQHIqdhWFRcWgEFaOHxkoNELC7S1ms9GX3G9cd2nvW0x0rle3FJ53HC7RIMcTkQNf1QSmjTN2vjUajqhfQPEHofkU+z27rGCLhoBNs4V4OWtZxkVTeDI4dyEHz81r16Qe0tPceB0Ky3Ui0w7Me8cRyWpUsRloSUm6kqidgyRN0Sb807fmuTofcBCqYnZlKoIewGVdHzSPzQY2E7OUafsOqNbnuB53Z6H4KzjNgUKwAqt9IBkHkuaI1ANgreIrBgk8YA4nP5KhVxLnEEnUwNB5+aSFqs3YOCYfUoM/pY1E7Z2HII9CCCLgxf3I2HnrGiJk+BWsZ1lYbs9RaI3bZDuJie5WRsun+Rt+WvmFdB+KWp689VUVxg2flF+QzUgw7bWF1Kdesoo+qKZtESDHJW6LSTA9/wBU1CiT4g/4Wg1gGXVS1YzsVgHOvZ15AFoyyB7/ABVX7GBPqQJkWtzv5zW6UymrjBGGYYIA5JvsrD+EXvktt1Jp/CPBRuwLDlI6H6q6mMj7FTOg/VP9gpH8LZ+BWi/Au0cDeb21y1Vaq1zXAEESJBzEix06K6iD7upH8DfDVN91UdaTP7RmrRPvRAygpnZNA/6TP7RmondnsKZmhTPH1R4rRHnJF/j6IMR3ZDAHPC0v7AO9TYDsrhKL/SUqZpOyPo3vYHDg5oMFaoKIHzyQS/Z6bhul1Qf1u+SzMR2IwdV2+705dx+04gx0l9hyWiD7kQcp5XVvZmC9CwU21KhDcvSP33DlvOue8qfGURUAD7gGc4uMlS+0OGqIY08ink1OKAGiLcUP2wahIYxvPwUw2Jt1RYmhvtI10PNOMSDkHeBRel5HwQY88c9bpLSqYdjjLqUk5lJa1nFMI2pJLDaCvjmNkXJnQfVQO2l/DrxSSWpEtMf3pl1oFgMs5J94UrtnC8OI9+gSSUojqYB/4SHa8CqQfdwNiM+uqSSsqVILz0n3fojOfckkqHaOfnyVJSzCZJBp4Q27yPPirA08EklhsgmKSSBQiCSSBwqO123Yf5v/ADZJJWJVW8a8fPvTykktsi+ac5SkkgYFF8kkkBtcjakkiHjh3KZmDJzNvFJJS1ZEzMK0czzKkDBoAkkstHQV6oa2T4czkkkiVlOxLycykkktsP/Z",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "A Carpet",
      "data:image/jpeg;base64,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",
      "A carpet which you might like - or not.",
      89.99
    ),
  ];

  constructor(hookId) {
    super(hookId);
  }

  render() {
    this.createRootElement("ul", "product-list", [new ElementAttribute("id", "prod-list")]);

    for (const prod of this.products) {
      const productItem = new ProductItem(prod, "prod-list");
      productItem.render();
    }
  }
}

class ProductItem extends Component {
  constructor(product, hookId) {
    super(hookId);
    this.product = product;
  }
  addToCart() {
    App.addProductToCart(this.product);
  }
  render() {
    const prodEl = this.createRootElement("li", "product-item");
    prodEl.innerHTML = `
        <div>
            <img src="${this.product.imageUrl}" alt="${this.product.title}" />
            <div class="product-item__content">
                <h2>${this.product.title}</h2>
                <h3>${this.product.price}</h3>
                <p>${this.product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
    `;
    const addCartBtnElement = prodEl.querySelector("button");
    addCartBtnElement.addEventListener("click", this.addToCart.bind(this));
  }
}

class Shop {
  render() {
    this.cart = new ShoppingCart("app");
    this.cart.render();

    const productList = new ProductList("app");
    productList.render();
  }
}

class App {
  static cart;
  static init() {
    const shop = new Shop();
    shop.render();
    this.cart = shop.cart;
  }

  static addProductToCart(product) {
    this.cart.addProudct(product);
  }
}

App.init();
