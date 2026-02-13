import facebookIcon from "./assets/img/icon-facebook.svg";
import twitterIcon from "./assets/img/icon-twitter.svg";
import pinterestIcon from "./assets/img/icon-pinterest.svg";
import shareIcon from "./assets/img/icon-share.svg";

const footer = document.getElementById("footer");
const tabletIcons = document.getElementById("tablet-share-icons");
const shareBtn = document.getElementById("share-btn");
const originalFooter = footer.innerHTML;
let isShareOpen = false;

document.addEventListener("click", (e) => {
  const btn = e.target.closest("#share-btn, #share-btn-close");
  if (!btn) return;

  const isMobile = window.matchMedia("(max-width:767px)").matches;
  const isTablet = window.matchMedia("(min-width:768px)").matches;
  if (isMobile) {
    isShareOpen = !isShareOpen;

    if (isShareOpen) {
      footer.innerHTML = shareIcons;
    } else {
      footer.innerHTML = originalFooter;
    }
  } else if (isTablet) {
    isShareOpen = !isShareOpen;

    if (isShareOpen) {
      tabletIcons.innerHTML = tabletShareIcons;
      shareBtn.style.backgroundColor = "#6E8098";
    } else {
      tabletIcons.innerHTML = "";
      shareBtn.style.backgroundColor = "#ECF2F8";
    }
  } else {
    return;
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

const tabletShareIcons = `    <div
  id="share-btn-close"
  class="md:shadow-xl md:bottom-14 md:-right-18 md:w-62 md:h-12 md:rounded-xl md:absolute md:px-5 h-20 bg-[#48556A] rounded-b-xl flex items-center justify-center px-5"
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
    class="shadow-xl md:absolute md:-bottom-2.5 md:right-28 h-5 w-5 bg-dark-graish-blue rotate-45"
  ></div>
</div>`;
