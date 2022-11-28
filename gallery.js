class Modal{
  constructor(i){
    this.modal = document.getElementById("modal" + i);
    this.element = document.getElementById(i);
    this.modalImg = document.getElementById("mod" + i);
    this.element.addEventListener("click", ()=> this.handleClick());
    this.span = document.getElementsByClassName("close")[i];
    this.span.addEventListener("click", () => this.handleCloseButtonClick());
  }
  handleClick(){
    this.modal.style.display = "block";
    this.modalImg.src = this.element.src;
  }
  handleCloseButtonClick(){
    this.modal.style.display = "none";
  }
}

const numOfImages = 8;
const modals = [];
function load(){
  for(let i = 0; i < numOfImages; i++){
    modals.push(new Modal(i));
  }
}
