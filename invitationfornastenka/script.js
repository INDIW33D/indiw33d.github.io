const openedCard = document.querySelector(".opened-card");
const closedCard = document.querySelector(".closed-card");
const openButton = document.querySelector(".open");
const mobileText = document.querySelector(".mobile");

const md = new MobileDetect(window.navigator.userAgent);

if (md.phone() != null) {
  mobileText.style.display = "block";
} else {
  closedCard.style.display = "block";
}

openButton.addEventListener("click", () => {
  const close = setInterval(() => {
    closedCard.style.height = closedCard.clientHeight - 1 + "px";

    if (closedCard.clientHeight <= 0) {
      closedCard.style.display = "none";
      openedCard.style.height = "0px";
      openedCard.style.display = "block";
      const open = setInterval(() => {
        openedCard.style.height = openedCard.clientHeight + 1 + "px";

        if (openedCard.clientHeight >= 610) {
          clearInterval(open);
        }
      }, 1);

      clearInterval(close);
    }
  }, 1);
});
