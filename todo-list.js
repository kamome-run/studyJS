document.querySelector('#add-tasks').addEventListener('click', (e) => {
    e.preventDefault();
  
    // 入力されたタスクを取得
    const inputElement = document.querySelector('#todo-input');
    // ulタグの取得
    const ulElement = document.querySelector('#todo-list');
  
    // 新しく作成したliタグの中に、入力されたタスクを表示
    const liElement = document.createElement('li');
    // 作成したliタグにclassを設定
    liElement.className = 'todo-item';
  
    // チェックボックスを作成
    // チェックボックスに使うinputタグを新しく作成
    const checkboxElement = document.createElement('input');
    // typeをcheckboxに設定
    checkboxElement.type = 'checkbox';
    // classを設定
    checkboxElement.className = 'todo-checkbox'

    // タスク名を保持する機能を作成
    const spanElement = document.createElement('span');
    spanElement.className = 'task-text';
    spanElement.textContent = inputElement.value;

    // タスクを削除する機能を作成
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.className = 'delete-button';
    deleteButtonElement.textContent = '削除';
    deleteButtonElement.addEventListener('click', function() {
        liElement.remove();
    });

    // liタグに各ボタン、タスク名を追加
    liElement.appendChild(checkboxElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(deleteButtonElement);


    //チェックボックスをチェックするとタスク名に横線を引くように設定をする
    checkboxElement.addEventListener('change', function() {
        if (this.checked) {
            spanElement.classList.add('strikethrough'); // ストライククラスを追加
        } else {
            spanElement.classList.remove('strikethrough'); // ストライククラスを削除
        } 
    });

    //ulタグに作成したliタグを追加する
    ulElement.appendChild(liElement);
  }
);