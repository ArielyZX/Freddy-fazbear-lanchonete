    document.addEventListener("DOMContentLoaded", () =>{
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartContainer = document.querySelector(".carrinho .items");
        const totalPrice = document.querySelector(".price-total");

        function updateCart(){
            cartContainer.innerHTML = "";
            let totalPriceValue = 0;

            cart.forEach((item, index) => {
                const items = document.createElement("div");
                items.classList.add("item");
                items.innerHTML = `
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price}</span>
                    <button class="removecart" data-index="${index}">Remover</button>            
                    `;
                cartContainer.appendChild(items);
                totalPriceValue += item.price;
            });

            totalPrice.textContent = `$${totalPriceValue.toFixed(2)}`;
        }

        function addCart(name, price){
            cart.push({name, price});
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }

        function removeCart(index){
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        }

    document.querySelectorAll(".add").forEach(button =>{
        button.addEventListener("click", (e) => {
            const option = e.target.closest(".option1");
            const name = option.dataset.name; 
            const price = parseFloat(option.dataset.price); 

            addCart(name, price);
            });
        }); 
        cartContainer.addEventListener("click", (e) => {
            if(e.target.classList.contains("removecart")) {
                const index = parseInt(e.target.dataset.index, 10);
                removeCart(index);
            }
        });

        document.querySelector('.checkout').addEventListener("click", () => {
            if (cart.length > 0) {
                alert("Deu bom :)");
                localStorage.removeItem('cart');
                cart = [];
                updateCart(); // atualiza o carrinho após limpar
            } else {
                alert("Deu ruim")
            }
        });

        updateCart();
    });
