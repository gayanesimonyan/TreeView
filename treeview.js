let tree = {
  title: "Հայաստան",
  children: [
    {
      title: "Շիրակ",
      children: [
        {
          title: "Գյումրի",
          children: [
            {
              title: "Սլաբոդկա",
              children: null,
            },
          ],
        },
      ],
    },
    {
      title: "Տավուշ",
      children: [
        {
          title: "Իջևան",
          children: [
            {
              title: "Երիտասարդական",
              children: null,
            },
          ],
        },
      ],
    },
    {
      title: "Լոռի",
      children: [
        {
          title: "Վանաձոր",
          children: [
            {
              title: "Դիմաց",
              children: null,
            },
          ],
        },
      ],
    },
    {
      title: "Արագածոտն",
      children: [
        {
          title: "Աշտարակ",
          children: null,
        },
      ],
    },
    {
      title: "Արմավիր",
      children: [
        {
          title: "Արմավիր",
          children: null,
        },
      ],
    },
    {
      title: "Արարատ",
      children: [
        {
          title: "Արտաշատ",
          children: null,
        },
      ],
    },
    {
      title: "Սյունիք",
      children: [
        {
          title: "Կապան",
          children: null,
        },
      ],
    },
    {
      title: "Վայոց Ձոր",
      children: [
        {
          title: "Եղեգնաձոր",
          children: [
            {
              title: "Միկոյան",
              children: [
                {
                  title: "Նորից Նոր",
                  children: null,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: "Գեղարքունիք",
      children: [
        {
          title: "Գավառ",
          children: null,
        },
      ],
    },
    {
      title: "Երևան",
      children: null,
    },
    {
      title: "Կոտայք",
      children: [
        {
          title: "Հրազդան",
          children: null,
        },
      ],
    },
  ],
};

let div = document.body.firstElementChild;

let div1 = document.createElement("div");
let div2 = document.createElement("div");
div1.className = "container1";
div2.className = "container2";
div.prepend(div1);
div.append(div2);

let header = document.createElement("h2");
header.innerHTML = "Հայաստանի մարզերը և մարզկենտրոնները";
div2.append(header);

const createTree = function (obj) {
  if (!obj.children) {
    let liLast = document.createElement("li");
    liLast.innerHTML = obj.title;
    return liLast;
  } else {
    let ul = document.createElement("ul");
    ul.className = "nested";
    let li = document.createElement("li");
    span = document.createElement("span");
    span.className = "caret";
    span.innerHTML = obj.title;
    li.append(span);
    li.append(ul);
    for (let child of obj.children) {
      ul.append(createTree(child));
    }
    return li;
  }
};

let firstUl = document.createElement("ul");
firstUl.className = "firstUl";
firstUl.append(createTree(tree));
div2.append(firstUl);

let treeElements = Array.from(document.querySelectorAll(".caret"));

for (let elem of treeElements) {
  elem.addEventListener("click", function () {
    this.parentElement
      .querySelector(".nested")
      .classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}