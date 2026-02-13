import facebookIcon from "./assets/img/icon-facebook.svg";
import twitterIcon from "./assets/img/icon-twitter.svg";
import pinterestIcon from "./assets/img/icon-pinterest.svg";
import shareIcon from "./assets/img/icon-share.svg";

const shareBtn = document.getElementById("share-btn");
const footer = document.getElementById("footer");
const originalFooter = footer.innerHTML;
let isShareOpen = false;

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#share-btn, #share-btn-close");
  if (!btn) return;

  const isMobile = window.matchMedia("(max-width:767px)").matches;
  if (!isMobile) return;

  isShareOpen = !isShareOpen;

  if (isShareOpen) {
    footer.innerHTML = shareIcons;
  } else {
    footer.innerHTML = originalFooter;
  }

  console.log("Button clicked");
});

const shareIcons = `
  <div id="share-btn-close"
    class="w-full h-20  bg-[#48556A] rounded-b-xl flex items-center justify-between px-8"
  >
    <div class="flex gap-5 items-center">
      <span class="text-[0.8125rem] text-[#9DAEC2]">SHARE</span>
      <span
        ><img
          src="${facebookIcon}"
          alt="An icon of facebook"
      /></span>
      <span
        ><img
          src="${twitterIcon}"
          alt="An icon of twitter"
      /></span>
      <span
        ><img
          src="${pinterestIcon}"
          alt="An icon of pinterest"
      /></span>
    </div>
    <div
      class="h-7 w-7 rounded-full flex items-center justify-center bg-[#6E8098]"
    >
      <img
        src="${shareIcon}"
        alt="An icon of share button"
        class="brightness-0 invert"
      />
    </div>
  </div>`;
