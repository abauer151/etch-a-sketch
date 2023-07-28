let color = [3];
color[0] = 0;
color[1] = 0;
color[2] = 0;

let toggleColor = true;

function buildGrid()
{
    let numRows = 200;
    let numColumns = 300;
    let gridWidth = 80;
    let gridHeight = 80;
    let grid = document.querySelector(".grid");
    grid.style.margin = 0;

    for(let i = 0; i < numRows; i++)
    {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.width = gridWidth;
        row.style.height = (gridHeight / numRows) + "vh";
        
        grid.appendChild(row);

        for(let j = 0; j < numColumns; j++)
        {
            let box = document.createElement("div");
            box.addEventListener("mouseover", hover);
            box.style.display = "flex";
            box.style.width = (gridWidth / numColumns) + "vw";
            box.style.height = (gridHeight / numRows) + "vh";
            box.style.backgroundColor = "white";
            box.className = "box";
            row.appendChild(box);
        }
    }

    listen()
}

function listen()
{
    let colorBtns = document.querySelectorAll(".palette button");
    let arr = Array.prototype.slice.call(colorBtns);
    for(let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
        arr[i].addEventListener('click', selectColor);
    }

    document.addEventListener('keyup', (e) => {
        if (e.code === "KeyF")
        {
            toggleColor = !toggleColor;
        }
    });

    let clearBtn = document.querySelector(".clear");
    clearBtn.addEventListener('click', clearGrid)

    let saveColor = document.querySelector(".save");
    saveColor.addEventListener('click', pickColor);
}

function hover()
{
    if(toggleColor)
    {
        this.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
}

function selectColor()
{
    let selectedColor = getComputedStyle(this).backgroundColor.match(/\d+/g);
    color[0] = selectedColor[0];
    color[1] = selectedColor[1];
    color[2] = selectedColor[2];
}

function clearGrid()
{
    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i < boxes.length; i++)
    {
        boxes[i].style.backgroundColor = "white";
    }
}

function pickColor()
{
    let r = document.getElementById('r').value;
    let g = document.getElementById('g').value;
    let b = document.getElementById('b').value;

    if(isValid(r) && isValid(g) && isValid(b))
    {
        color[0] = r;
        color[1] = g;
        color[2] = b;

        let colorDisplay = document.querySelector("#color-display");
        colorDisplay.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

function isValid(input)
{
    let parsed = parseInt(input);
    if(typeof(parsed) === "number" && input >= 0 && input <= 255)
    {
        return true;
    }
    return false;
}

buildGrid();




