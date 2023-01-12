let home_count = 0
let guest_count = 0

let home_text = document.getElementById("home")
let guest_text = document.getElementById("guest")

function increment1_home()
{
    home_count += 1
    home_text.textContent = home_count
}

function increment2_home()
{
    home_count += 2
    home_text.textContent = home_count  
}

function increment3_home()
{
    home_count += 3
    home_text.textContent = home_count   
}

function increment1_guest()
{
    guest_count += 1
    guest_text.textContent = guest_count
}

function increment2_guest()
{
    guest_count += 2
    guest_text.textContent = guest_count  
}

function increment3_guest()
{
    guest_count += 3
    guest_text.textContent = guest_count   
}

