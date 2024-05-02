function makeFirstSectionContact() {
  const contentCtn = document.getElementById("content");
  const firstSection = document.createElement("section");
  const firstRight = document.createElement("div");
  const textFirstRight = document.createElement("p");
  contentCtn.classList.add("container");
  firstSection.classList.add("section-style");
  contentCtn.append(firstSection);
  firstSection.append(firstRight);
  textFirstRight.innerHTML = `<ul>
  <li>For reservation call us : 416-666-6666</li>
  <li>4532 Main Street, Toronto, Canada</li>
  <li><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5773.0636039054225!2d-79.37619480642353!3d43.65790853953974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb4aa40caf45%3A0xb67e899d633e51!2sParc%20Communautaire%20Ryerson!5e0!3m2!1sfr!2sca!4v1714679311060!5m2!1sfr!2sca" width="100%" height="auto" id="map" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></li>
  </ul>`;
  firstRight.append(textFirstRight);
}

export { makeFirstSectionContact };
