let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

let url = "http://universities.hipolabs.com/search?name=";

async function universities(country) {
  let res = await axios.get(url + country);
  return res.data
}

btn.addEventListener("click", async function() {
    let country = input.value;
    input.value = "";
    let college = await universities(country)
    let list_clg = show(college)

    let list = ul.innerHTML = `<li>${list_clg}</li>1;
    con
})

function show(name) {
    for(col of name) {
        return col.name;
    }
}