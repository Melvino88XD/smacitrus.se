let clicks = 0;

document.getElementById("gurka").onclick = function()
{
    clicks += 1;
    document.getElementById("clicks_lbl").innerText = "Clicks: ";
}