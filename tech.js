class Expand{
  isExpanded = false;
  constructor(i){
    this.element = document.getElementById("button" + i);
    this.element.addEventListener("click", () => this.handleClick());
    this.expandedElement = document.getElementById("impact"+i);
  }
  handleClick(){
      if(this.isExpanded === false){
        this.expandedElement.style.display = "block";
        this.element.firstChild.innerText = "Collapse";
        this.isExpanded = true;
      }else{
        this.expandedElement.style.display = "none";
        this.element.firstChild.innerText = "Learn more";
        this.isExpanded = false;
      }  
  }
}

const expandedArr = [];
const numOfTech = 3;

function load(){
  for(let i = 0; i < numOfTech; i++){
    expandedArr.push(new Expand(i));
  }
}