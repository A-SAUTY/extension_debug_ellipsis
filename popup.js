const words =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec posuere ipsum. Praesent aliquam congue tellus, sodales feugiat dolor tincidunt tempus. Sed enim neque, rhoncus vitae consectetur a, dapibus a justo. Quisque egestas justo et diam ultricies, efficitur blandit quam cursus. Sed tellus elit, fermentum et interdum nec, ornare a nisl. Pellentesque volutpat mauris vel varius congue. Etiam elementum condimentum ipsum, nec tempor ipsum placerat vitae. Fusce luctus lacus vel elementum luctus. Mauris eget scelerisque massa. Vestibulum turpis ligula, vehicula vel accumsan et, vehicula id purus. Pellentesque aliquet tincidunt elit, eget lobortis lacus eleifend ac.Maecenas efficitur augue fermentum, scelerisque nisl eleifend, gravida libero. Phasellus elementum elit a nunc pretium, eu consectetur risus faucibus. Maecenas vitae ligula elit. Nam cursus dui ante, id iaculis nulla sagittis tincidunt. Maecenas egestas lectus in ante lacinia placerat. Sed in malesuada est. Sed bibendum et erat id condimentum. Cras tempor imperdiet tortor, vitae consequat tortor accumsan ac. Curabitur facilisis faucibus tempor. Nulla facilisi. In hac habitasse platea dictumst.Nullam id ex quis felis scelerisque vestibulum. Suspendisse potenti. Fusce sed ante eu purus feugiat sollicitudin. Etiam suscipit justo at lectus aliquet tincidunt. Nam eu cursus urna. Integer a augue eu justo consectetur luctus. Etiam ac enim pellentesque, vestibulum lectus consequat, aliquet risus. Suspendisse eu accumsan ligula, pharetra consequat turpis. Mauris ut vulputate, feugiat aliquam diam.".match(
    /\b\w+\b/g
  );

// Remplacer le texte
document.getElementById("replaceForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const selector = document.getElementById("selectorInput").value.trim();
  const charCountStr = document.getElementById("charCountInput").value.trim();
  const charCount = parseInt(charCountStr, 10);

  if (!selector) {
    alert("Veuillez entrer un sélecteur CSS.");
    return;
  }

  if (isNaN(charCount) || charCount < 1) {
    alert("Veuillez entrer un nombre valide de caractères (>= 1).");
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (sel, count, words) => {
      const elements = document.querySelectorAll(sel);

      if (!elements.length) {
        alert(`Aucun élément trouvé pour "${sel}".`);
        return;
      }

      function replaceTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement;
          if (parent && !parent.hasAttribute("data-original-text")) {
            parent.setAttribute("data-original-text", node.textContent);
          }
          node.textContent = words
            .sort(() => 0.5 - Math.random())
            .slice(0, count)
            .join(" ");
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          node.childNodes.forEach(replaceTextNodes);
        }
      }

      elements.forEach((el) => replaceTextNodes(el));
      console.log(
        `Texte remplacé dans ${elements.length} élément(s) avec ${count} caractères.`
      );
    },
    args: [selector, charCount, words],
  });
});

// Restaurer le texte
document.getElementById("restoreBtn").addEventListener("click", async () => {
  const selector = document.getElementById("selectorInput").value.trim();
  if (!selector) {
    alert("Veuillez entrer un sélecteur CSS.");
    return;
  }

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (sel) => {
      const elements = document.querySelectorAll(sel);

      if (!elements.length) {
        alert(`Aucun élément trouvé pour "${sel}".`);
        return;
      }

      function restoreTextNodes(node) {
        if (node.nodeType === Node.TEXT_NODE) {
          const parent = node.parentElement;
          if (parent && parent.hasAttribute("data-original-text")) {
            node.textContent = parent.getAttribute("data-original-text");
            parent.removeAttribute("data-original-text");
          }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          node.childNodes.forEach(restoreTextNodes);
        }
      }

      elements.forEach((el) => restoreTextNodes(el));
      console.log(`Texte restauré dans ${elements.length} élément(s).`);
    },
    args: [selector],
  });
});
