# 🔧 Extension Chrome – Debug Ellipsis

Cette extension permet de remplacer le texte dans un ou plusieurs éléments HTML via un sélecteur CSS, avec possibilité de restauration du texte remplacé.

---

## 📦 Installation

1. **Dézippez** ce fichier `.zip` dans un dossier local.
2. Ouvrez Google Chrome (ou un navigateur basé sur Chromium).
3. Accédez à [`chrome://extensions`](chrome://extensions)
4. Activez le **Mode développeur** (coin supérieur droit).
5. Cliquez sur **"Charger l’extension non empaquetée"**.
6. Sélectionnez le dossier contenant le fichier `manifest.json`.

✅ L’extension est maintenant installée ! Elle apparaîtra dans la barre d’extensions.

---

## 🧪 Utilisation

1. Cliquez sur l’icône de l’extension dans la barre.
2. Remplissez :
   - **Sélecteur CSS** (ex. `.ma-classe`, `#mon-id`, `ar-list`)
   - **Nombre de caractères** (ex. 64)
3. Utilisez les boutons :
   - `Remplacer le texte` : applique des `x` à tous les textes ciblés.
   - `Restaurer le texte` : remet les textes d’origine (tant que la page n’a pas été rechargée).

---

## 📝 Notes techniques

- Le texte original est stocké dans un attribut `data-original-text`.
- La restauration ne fonctionne **que tant que la page n’est pas rechargée**. (Après rechargement, le texte sera ... restauré)

---

## 💬 Besoin d’aide ?

Contactez Aymeric SAUTY, il vous repondra dans 6 ans,
sinon ouvrez les fichiers source pour comprendre/modifier le comportement.