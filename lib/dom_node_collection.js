class DOMNodeCollection {
  constructor (HTMLElements) {
      this.HTMLElements = HTMLElements;
  }
  
  html(string) {
    if (string) {
      this.HTMLElements.forEach((el) => {
        el.innerHTML = string;
      });
    } else {
      return this.HTMLElements[0].innerHTML;
    }
  }
  
  empty() {
    this.HTMLElements.forEach((el) => {
      el.innerHTML = "";
    });
  }
  
  append(element) {
    this.HTMLElements.forEach((el) => {
      el.innerHTML += element.outerHTML;
    });
  }
  
  attr(attributeName, setting) {
    if (!setting) {
      const attrArr = [];
      this.HTMLElements.forEach((el) => {
        attrArr.push(el.getAttribute(attributeName));
      });
      return attrArr;
    } else {
      this.HTMLElements.forEach((el) => {
        el.setAttribute(attributeName, setting);
      });
    }
  }
  
  addClass(classNameGiven) {
    this.HTMLElements.forEach((el) => {
      el.classList.add(classNameGiven);
    });
  }
  
  removeClass(classNameGiven) {
    if (!classNameGiven) {
      this.HTMLElements.forEach((el) => {
        el.classList = [];
      });
    } else {
      this.HTMLElements.forEach((el) => {
        el.classList.remove(classNameGiven);
      });
    }
  }
  
  children() {
    let childArr = [];
    
    this.HTMLElements.forEach((el) => {
      childArr = childArr.concat(el.children);
    });
    
    return new DOMNodeCollection(childArr);
  }
  
}

module.exports = DOMNodeCollection;