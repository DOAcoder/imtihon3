const openModalBtn = document.querySelector(".info-box-btn");

const modal = document.querySelector(".modal");

const closeModal = document.querySelector(".modal_close");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});



const sendDataBtn = document.querySelector(".send_data");

const modalSucces = document.querySelector(".modal_succes");

const modalSuccesClose = document.querySelector(".ms_modal_close");

const zakrit = document.querySelector(".zakrit");

zakrit.addEventListener("click", () => {
  modalSucces.style.display = "none";
});


modalSuccesClose.addEventListener("click", () =>{
    modalSucces.style.display = "none"; 
})

sendDataBtn.addEventListener("click", () =>{

    modal.style.display = "none";
    modalSucces.style.display = 'flex';
})