# 🔧 Extension Chrome – Debug Ellipsis

Cette extension permet de remplacer le texte dans un ou plusieurs éléments HTML via un sélecteur CSS, avec possibilité de restauration du texte remplacé.

---

## 📦 Installation

1. **Décompressez** le fichier .zip dans un dossier local. (Ce dossier ne devra pas être supprimé, car le navigateur exécutera le code directement depuis celui-ci.)
2. Ouvrez Google Chrome (ou un navigateur basé sur Chromium).
3. Accédez à [`chrome://extensions`](chrome://extensions)
4. Activez le **Mode développeur** (coin supérieur droit).
5. Cliquez sur **"Charger l’extension non empaquetée"**.
6. Sélectionnez votre dossier local.

✅ L’extension est maintenant installée ! Elle apparaîtra dans la barre d’extensions.

---

## 🧪 Utilisation

1. Cliquez sur l’icône de l’extension dans la barre.
2. Remplissez :
   - **Sélecteur CSS** (ex. `.ma-classe`, `#mon-id`, `ar-list`)
   - **Nombre de mots** (ex. 64)
3. Utilisez les boutons :
   - `Remplacer le texte` : remplace tous les textes ciblés.
   - `Restaurer le texte` : remet les textes d’origine (tant que la page n’a pas été rechargée).

---

## 📝 Notes techniques

- Le texte original est stocké dans un attribut `data-original-text`.
- La restauration ne fonctionne **que tant que la page n’est pas rechargée**. (Après rechargement, le texte sera ... restauré)

---

## 💬 Besoin d’aide ?

Contactez Aymeric SAUTY, il vous repondra dans 6 ans,
sinon ouvrez les fichiers source pour comprendre/modifier le comportement.