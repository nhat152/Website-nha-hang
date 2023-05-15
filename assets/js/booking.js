const selectMenu = document.getElementById('menu-select');
                        const addMenuBtn = document.getElementById('add-menu');
                        const selectedMenu = document.getElementById('selected-menu');

                        addMenuBtn.addEventListener('click', () => {
                            const selectedOption = selectMenu.options[selectMenu.selectedIndex];
                            if (selectedOption.value !== '') {
                                const menuItem = document.createElement('li');
                                menuItem.innerText = selectedOption.text;
                                menuItem.setAttribute('data-value', selectedOption.value);
                                selectedMenu.appendChild(menuItem);
                                menuItem.addEventListener('click', () => {
                                    menuItem.remove();
                                });
                            }
                        });