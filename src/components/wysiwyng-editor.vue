<template>
  <div id="app" class="app-container">
    <div class="editor-container">
      <div class="toolbar">
        <button @click="undo" title="Назад" class="blue-button">↶</button>
        <button @click="redo" title="Вперёд" class="blue-button">↷</button>
        <button @click="formatHeader" title="Заголовок" class="blue-button">TТ</button>
        <button @click="formatParagraph" title="Абзац" class="blue-button">T</button>
        <button @click="addImage" title="Добавить картинку" class="blue-button">🖼</button>
        <button @click="copyHTML" title="Скопировать HTML" class="blue-button">Скопировать HTML</button>
      </div>
      <div class="editor-content" contenteditable="true" ref="editor">
        <p>
          Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий.
        </p>
        <h1>Смотрите какие обезьянки</h1>
        <img src="../assets/обезьянки.jpg" alt="Обезьянки" />
        <p>
          Таким образом консультация с широким активом представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой иную шоу ищущую шоу ищущую шукающую шоущую щупающую эксперимент проверки форм развития. Идейные соображения высшего порядка, а также укрепление и развитие структуры влечет за собой процесс внедрения и модернизации соответствующий условий активизации. 
          Задача организации, в особенности же реализация намеченных плановых заданий играет важную роль в формировании дальнейших направлений развития. Повседневная практика показывает, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании существенных финансовых и административных условий.
        </p>
        <p>
          Товарищи! новая модель организационной деятельности требует от нас анализа направлений прогрессивного развития. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности требуют от нас анализа позиций, занимаемых участниками в отношении постовленных задач. Задача организации, в особенности же реализация намеченных плановых заданий требуют от нас анализа системы обучения кадров, соответствующей насущным потребностям.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    undo() {
      document.execCommand("undo");
    },
    redo() {
      document.execCommand("redo");
    },
    formatHeader() {
      this.applyFormatting("h1");
    },
    formatParagraph() {
      this.applyFormatting("p");
    },
    applyFormatting(tag) {
      const selection = window.getSelection();

      if (selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const editor = this.$refs.editor;

        if (editor.contains(range.commonAncestorContainer)) {
          if (tag === "h1") {
            document.execCommand("formatBlock", false, "h1");
          } else if (tag === "p") {
            document.execCommand("formatBlock", false, "p");
          }

          this.$refs.editor.focus();
        } else {
          alert("Выделите текст внутри редактора!");
        }
      } else {
        alert("Выделите текст для применения форматирования.");
      }
    },
    addImage() {
      const url = prompt("Введите URL картинки:");
      if (url) {
        document.execCommand("insertImage", false, url);
      }
    },
    copyHTML() {
      const content = this.$refs.editor.innerHTML;
      navigator.clipboard.writeText(content).then(() => {
        alert("HTML скопирован!");
      });
    },
  },
};
</script>

<style>
.app-container {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #202020;
  min-height: 100vh;
}

.editor-container {
  margin: 20px auto;
  max-width: 800px;
  background-color: #2b2b2b;
  padding: 20px;
  border-radius: 5px;
}

.toolbar {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.toolbar .blue-button {
  background: #444;
  color: #00aaff; 
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 3px;
}

.toolbar .blue-button:hover {
  background: #555;
}

.editor-content {
  border: 1px solid #444;
  padding: 10px;
  min-height: 200px;
  background: #1e1e1e;
  color: #fff;
  border-radius: 3px;
}

.editor-content img {
  max-width: 100%;
  border-radius: 5px;
  margin: 10px 0;
}

.editor-content h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffffff; 
}

.editor-content p {
  font-size: 16px;
  line-height: 1.5;
  padding-right: 150px;
}
</style>
