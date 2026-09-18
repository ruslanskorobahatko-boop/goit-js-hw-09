import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as i}from"./assets/vendor-CgTBfC_f.js";const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rch-4202822__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/rch-4202822_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/astronomy-3674040__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/astronomy-3674040_1280.jpg",description:"Universe Space"},{preview:"https://cdn.pixabay.com/photo/2019/05/15/16/48/flower-4205071__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/15/16/48/flower-4205071_1280.jpg",description:"White Flower Buharma"},{preview:"https://cdn.pixabay.com/photo/2019/05/12/17/05/outdoor-4198129__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/12/17/05/outdoor-4198129_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Alpine Lake Nature"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Mountain Alpine Highlands"}],e=document.querySelector(".gallery"),c=t.map(({preview:o,original:p,description:a})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${p}">
          <img
            class="gallery-image"
            src="${o}"
            alt="${a}"
          />
        </a>
      </li>
    `).join("");e.innerHTML=c;new i(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
