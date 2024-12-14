const roomsData = [
        { number: 1, guests: 2, title: "Двухместный номер", description: "Просторный двухместный номер, идеально подходящий для пар или друзей, путешествующих вместе. Оснащен двуспальной или двумя односпальными кроватями, уютной зоной отдыха и всем необходимым для комфортного пребывания. Наслаждайтесь совместными моментами в приятной обстановке.", price: 2500, images: ["https://velesmebel.ru/image/catalog/krovati/selena1chernyj_mahagon(1).jpg", "http://vpiter.com/images/6289.jpg", "https://stroy-podskazka.ru/images/article/orig/2017/10/metallicheskie-odnospalnye-krovati-13.jpg"], services: ["Сейф в номере","Можно с домашними животными","Завтрак в номер"], meal: ["Завтрак включен"], rooms: 2 },
        { number: 2, guests: 1, title: "Одноместный номер", description: "Уютный и комфортный одноместный номер идеально подходит для соло-путешественников. Оснащен одной удобной кроватью, рабочим столом и необходимыми удобствами для комфортного проживания. Идеально для отдыха после насыщенного дня.", price: 2000, images: ["https://betonpogreb.ru/wp-content/uploads/8/5/3/853f16e53e03a375cf87a67554e0e351.jpeg", "https://st.dg-home.ru/upload/iblock/1f4/mramor_i_derevo_v_vannoy_pravila_udachnogo_sochetaniya.jpg"], services: ["Можно с домашними животными"], meal: ["Питание за дополнительную плату"], rooms: 1 },
        { number: 3, guests: 5, title: "Семейный номер", description: "Широкий семейный номер, который с комфортом разместит целую семью. Содержит одну двуспальную и четыре односпальных кровати, а также дополнительные удобства, такие как холодильник и телевизор, а так же кроватку для малыша. Отличный выбор для семейных поездок.", price: 4000, images: ["https://s01.cdn-pegast.net/get/00/3c/d7/2eaef805aa1d6b9dc40d41025daa4f3328170bf376cf884902b8ad0e23/5c6e48cb4f4d0.jpg", "https://avatars.mds.yandex.net/i?id=e49355f11b8a06313e44739f51ad181f_l-5886424-images-thumbs&ref=rim&n=13&w=1600&h=1015", "https://avatars.mds.yandex.net/get-altay/1245631/2a00000167afce82ed5b08f4c90e75b88e23/XXXL"], services: ["Кроватка для ребёнка"], meal: ["Завтрак включен"], rooms: 2 },
        { number: 4, guests: 2, title: "Люкс номер", description: "Роскошный люкс, предлагающий максимальный комфорт и стиль. Оснащен спальней с большой кроватью, отдельной зоной гостиной и приватной ванной комнатой. Идеален для особых случаев и тех, кто хочет порадовать себя высоким уровнем удобства.", price: 5500, images: ["https://amiel.club/uploads/posts/2022-10/1664841481_1-amiel-club-p-interer-nomera-v-gostinitse-krasivo-1.jpg", "https://pro-dachnikov.com/uploads/posts/2021-10/1633405360_13-p-vannaya-komnata-v-eko-stile-foto-13.jpg", "https://avatars.mds.yandex.net/i?id=d19572eeb634e10b0249465e47ef8361_l-4011747-images-thumbs&n=13"], services: ["Сейф в номере", "Завтрак в номер"], meal: ["Завтрак включен", "Обед включен", "Ужин включен"], rooms: 2 },
        { number: 5, guests: 1, title: "Комфортный номер", description: "Уютный одноместный номер с всеми удобствами для комфортного проживания. Более просторный номер с двуспальной кроватью, удобным диваном, телевизором, холодильником, бесплатным Wi-Fi, ванной комнатой с душем и ванной.", price: 2000, images: ["https://assets.blackandmilk.co.uk/1920x1080/de2faa1540/space-savng-interior-design-02.jpg", "https://media.teradom.ru/images/0/16527_8.jpg"], services: ["Wi-Fi", "Кухня"], meal: ["Без питания"], rooms: 1 },
        { number: 6, guests: 4, title: "Люкс с видом на море", description: "Элегантный номер с панорамным видом на море, отдельной спальней с большой двуспальной кроватью, просторной гостиной зоной с камином и диваном, телевизором, холодильником, кофемашиной, бесплатным Wi-Fi, ванной комнатой с ванной и душевой кабиной.", price: 10000, images: ["https://img.goodfon.ru/original/1920x1080/4/37/luxury-villa-open-living.jpg", "https://avatars.mds.yandex.net/i?id=03b732b01e25898efbe251a6c8912727_l-12606366-images-thumbs&n=13", "https://avatars.mds.yandex.net/i?id=a504aaab297fcd4caacd6b22b95b851b_l-5248224-images-thumbs&n=13", "https://russia-zov.ru/wp-content/uploads/2022/06/1624003648_20-almode_ru-p-belo-seraya-kukhnya-s-beloi-stoleshnitsei-20.jpg"], services: ["Сейф в номере", "Завтрак в номер","Кроватка для ребёнка","Гостиная"], meal: ["Завтрак включен", "Обед включен", "Ужин включен"], rooms: 2 },
        { number: 7, guests: 3, title: "Трехместный номер", description: "Комфортный номер для трех человек, оснащенный тремя односпальными кроватями, телевизором и всем необходимым.", price: 3000, images: ["https://namba.gracery.com/wp-content/uploads/sites/369/2018/12/tripleroom-1920x1080.jpg", "https://bigfoto.name/uploads/posts/2022-02/1645598258_56-bigfoto-name-p-vannaya-sovmeshchennaya-s-tualetom-tsvet-v-87.jpg"], services: ["Wi-Fi"], meal: ["Завтрак включен"], rooms: 1 },
        { number: 8, guests: 2, title: "Номер с балконом", description: "Двухместный номер с собственным балконом и прекрасным видом.", price: 2800, images: ["https://avatars.mds.yandex.net/i?id=0b13426e98455ef0700a87aad5fdad42_l-4146380-images-thumbs&ref=rim&n=13&w=1920&h=1080", "https://tmn.kerama-marazzi.com/upload/iblock/692/0z04y1gyirfm1rwyn1sxs9ybxmlzirom.jpg"], services: ["Wi-Fi", "Балкон"], meal: ["Питание за дополнительную плату"], rooms: 1 },
        { number: 9, guests: 4, title: "Семейный люкс", description: "Просторный семейный люкс с двумя спальнями и гостиной.", price: 6000, images: ["https://archgenerate.com/uploads/projects/5ef50554222773.71572162.jpg", "https://i.pinimg.com/736x/da/bd/c4/dabdc4ad4fb43cfbc033bbc142d668e1--small-guest-bedrooms-kid-bedrooms.jpg", "https://static.tildacdn.com/tild6232-3266-4461-b535-616435386339/------1.jpg", "https://avatars.mds.yandex.net/i?id=469b68252c03665a0391a17b648315d9_l-5194768-images-thumbs&n=13"], services: ["Wi-Fi", "Две спальни", "Гостиная"], meal: ["Завтрак включен"], rooms: 3 },
        { number: 10, guests: 2, title: "Стандартный номер", description: "Простой, но уютный двухместный номер.", price: 2200, images: ["https://bigfoto.name/uploads/posts/2022-03/1647077438_27-bigfoto-name-p-dizain-spalni-minimalizm-v-svetlikh-tonakh-61.jpg", "https://mirplitki.org/upload/bau3d/castle/images/castle0.jpg"], services: ["Wi-Fi"], meal: ["Питание за дополнительную плату","Без питания"], rooms: 1 },
        { number: 11, guests: 1, title: "Эконом номер", description: "Небольшой одноместный номер по доступной цене.", price: 1500, images: ["https://www.zastavki.com/pictures/1600x900/2019_Bedroom_with_a_bed_and_a_soft_stove_by_the_window_132142_25.jpg", "https://avatars.mds.yandex.net/get-mpic/5236698/img_id1214826243784882731.jpeg/orig","https://design.pibig.info/uploads/posts/2023-01/1674415474_design-pibig-info-p-kukhnya-do-potolka-uglovaya-dizain-krasivo-26.jpg"], services: ["Wi-Fi"], meal: ["Питание за дополнительную плату","Без питания"], rooms: 1 },
        { number: 12, guests: 4, title: "Апартаменты", description: "Просторные апартаменты с кухней и спальней.", price: 7000, images: ["https://i.ytimg.com/vi/CBFgUzsgMZI/maxresdefault.jpg", "https://staisha.top/uploads/posts/2023-02/1675310638_staisha-top-p-mebellar-spalni-spalnya-pinterest-65.jpg", "https://via.placeholder.com/350x150"], services: ["Wi-Fi", "Кухня"], meal: ["Без питания"], rooms: 3 }
    ];   

    const roomsContainer = document.getElementById('rooms-container');
    const guestsSelect = document.getElementById('guests');
    const priceRange = document.getElementById('price-range');
    const priceDisplay = document.getElementById('price-display');
    const breakfastSwitch = document.getElementById('breakfast-switch');
    const arrivalInput = document.getElementById('arrival');
    const departureInput = document.getElementById('departure');
    const arrivalDateDisplay = document.getElementById('arrivalDate');
    const departureDateDisplay = document.getElementById('departureDate');
    const roomPriceDisplay = document.getElementById('roomPrice');

    function filterRooms(rooms, filters) {
        return rooms.filter(room => {
            return Object.keys(filters).every(filterKey => {
                const filterValues = filters[filterKey];
                if (filterKey === 'price') {
                    const [min, max] = filterValues;
                    return room.price >= min && room.price <= max;
                } else if (filterKey === 'rooms') {
                    return filterValues.length === 0 || filterValues.includes(room.rooms);
                } else if (filterValues.length === 0) return true;
                else {
                    return filterValues.every(value => {
                        return room[filterKey] && room[filterKey].some(roomValue => roomValue.toLowerCase().includes(value.toLowerCase()));
                    });
                }
            });
        });
    }

    function renderRooms(data) {
        roomsContainer.querySelector('.col-md-9').innerHTML = ''; 
        data.forEach(room => {
            let imageCarousel = "";
            if (room.images && room.images.length > 0) {
              imageCarousel = `
                <div id="carouselExampleCaptions-${room.number}" class="carousel slide">
                  <div class="carousel-inner">`;
              room.images.forEach((img, index) => {
                imageCarousel += `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                      <img src="${img}" class="d-block w-100" alt="Номер ${room.number}">
                    </div>`;
              });
              imageCarousel += `
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions-${room.number}" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions-${room.number}" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>`;
            } else {
                imageCarousel = `<img src="placeholder.jpg" class="card-img-top" alt="Номер ${room.number}">`;
            }

            const card = `
                <div class="card mb-4" data-guests="${room.guests}" data-room-number="${room.number}" data-room-price="${room.price}">
                    ${imageCarousel}
                    <div class="card-body">
                        <h2 class="card-title">${room.title}</h2>
                        <p class="card-text">${room.description}</p>
                        <p class="card-text">Цена: ${room.price} руб/cутки</p>
                        <button class="btn btn-primary btn-booking" data-bs-toggle="modal" data-bs-target="#bookingModal" data-room-price="${room.price}">Забронировать</button>
                    </div>
                </div>
            `;
            roomsContainer.querySelector('.col-md-9').insertAdjacentHTML('beforeend', card);
        });
        attachBookingListeners();
    }

    function attachBookingListeners() {
        const bookingButtons = document.querySelectorAll('.btn-booking');
        bookingButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const card = event.target.closest('.card');
                const roomNumber = card.dataset.roomNumber;
                const roomType = card.querySelector('.card-title').textContent;
                const roomPrice = parseInt(card.dataset.roomPrice);
                const filters = getFilters();
                const arrivalDate = arrivalInput.value;
                const departureDate = departureInput.value;

                const totalPrice = calculateTotalPrice(roomPrice, filters, arrivalDate, departureDate);

                document.getElementById('roomType').value = `Номер ${roomNumber} - ${roomType}`;
                arrivalDateDisplay.value = arrivalDate;
                departureDateDisplay.value = departureDate;
                roomPriceDisplay.value = totalPrice; 
                displayFiltersInModal(filters);
            });
        });
    }

    function calculateTotalPrice(roomPrice, filters, arrivalDate, departureDate) {
        let totalPrice = roomPrice;
        const oneDay = 24 * 60 * 60 * 1000; 
        const diffDays = Math.round(Math.abs((new Date(departureDate) - new Date(arrivalDate)) / oneDay));

        if (document.getElementById('breakfast-switch').checked) {
            totalPrice += diffDays * 300; 
        }
        return totalPrice * diffDays;
    }

    function getFilters() {
        const filters = {};
        const checkboxes = document.querySelectorAll('.sidebar input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            const groupName = checkbox.name;
            if (!filters[groupName]) filters[groupName] = [];
            if (checkbox.checked) {
                if (groupName === 'rooms') {
                    filters[groupName].push(parseInt(checkbox.id.replace('rooms', '')));
                } else {
                    filters[groupName].push(checkbox.nextElementSibling.textContent.trim());
                }
            }
        });
        const minPrice = parseInt(priceRange.min);
        const maxPrice = parseInt(priceRange.max);
        const value = parseInt(priceRange.value);
        filters.price = [value, maxPrice];
        return filters;
    }

    const checkboxes = document.querySelectorAll('.sidebar input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const filters = getFilters();
            let filteredRooms = filterRooms(roomsData, filters);
            const selectedGuests = parseInt(guestsSelect.value);
            filteredRooms = filteredRooms.filter(room => selectedGuests === 0 || room.guests >= selectedGuests);
            renderRooms(filteredRooms);
        });
    });

    guestsSelect.addEventListener('change', () => {
        const filters = getFilters();
        const selectedGuests = parseInt(guestsSelect.value);
        let filteredRooms = roomsData.filter(room => selectedGuests === 0 || room.guests >= selectedGuests);
        filteredRooms = filterRooms(filteredRooms, filters);
        renderRooms(filteredRooms);
    });

    priceRange.addEventListener('input', () => {
        const minPrice = parseInt(priceRange.min);
        const maxPrice = parseInt(priceRange.max);
        const value = parseInt(priceRange.value);
        priceDisplay.textContent = `${value} - ${maxPrice} руб.`;

const filters = getFilters();
let filteredRooms = filterRooms(roomsData, filters);
const selectedGuests = parseInt(guestsSelect.value);
filteredRooms = filteredRooms.filter(room => selectedGuests === 0 || room.guests >= selectedGuests);
renderRooms(filteredRooms);
});

function displayFiltersInModal(filters) {
let servicesString = "";
let mealString = "";
let roomsString = "";

if (filters.services && filters.services.length > 0) {
    servicesString = "Услуги: " + filters.services.join(', ');
} else {
    servicesString = "Услуги: Не выбрано";
}

if (filters.meal && filters.meal.length > 0) {
    mealString = "Питание: " + filters.meal.join(', ');
} else {
    mealString = "Питание: Не выбрано"; 
}

if (filters.rooms && filters.rooms.length > 0) {
    roomsString = "Комнат: " + filters.rooms.join(', ') + " ";
} else {
    roomsString = "Комнат: Не выбрано ";
}

const filterString = `В номер входят:\n${servicesString}\n${mealString}\n${roomsString}`;
document.getElementById('bookingFilters').textContent = filterString;
}


renderRooms(roomsData);


const bookingForm = document.getElementById('bookingForm');
const downloadButton = document.getElementById('downloadButton');
bookingForm.addEventListener('submit', function(event) {
event.preventDefault();
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const roomType = document.getElementById('roomType').value;
const arrivalDate = document.getElementById('arrivalDate').value;
const departureDate = document.getElementById('departureDate').value;
const roomPrice = document.getElementById('roomPrice').value;
const bookingFilters = document.getElementById('bookingFilters').textContent;
const messageDiv = document.getElementById('bookingMessage');

const bookingData = `Имя: ${name}\nEmail: ${email}\nТелефон: ${phone}\nТип номера: ${roomType}\nДата заезда: ${arrivalDate}\nДата выезда: ${departureDate}\nИтоговая сумма: ${roomPrice}\nФильтры: ${bookingFilters}`;

const message = `Номер успешно забронирован!`;
messageDiv.textContent = message;
messageDiv.style.display = 'block';
downloadButton.style.display = 'block';


downloadButton.addEventListener('click', function() {
    const blob = new Blob([bookingData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Бронирование EVRASIA.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
});
});
// Валидация дат
arrivalInput.addEventListener('change', validateDates);
    departureInput.addEventListener('change', validateDates);

    function validateDates() {
        const arrivalDate = new Date(arrivalInput.value);
        const departureDate = new Date(departureInput.value);
        const today = new Date();

        if (arrivalDate < today) {
            alert('Дата заезда не может быть раньше текущей даты.');
            arrivalInput.value = ''; 
            return;
        }

        if (departureDate <= arrivalDate) {
            alert('Дата выезда не может быть раньше или равна дате заезда.');
            departureInput.value = ''; 
            return;
        }

        const filters = getFilters();
        let filteredRooms = filterRooms(roomsData, filters);
        const selectedGuests = parseInt(guestsSelect.value);
        filteredRooms = filteredRooms.filter(room => selectedGuests === 0 || room.guests >= selectedGuests);
        renderRooms(filteredRooms);
    }
