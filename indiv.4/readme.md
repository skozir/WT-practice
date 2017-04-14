Задача 1
--------

Дана HTML таблица. У каждой ячейки таблицы есть аттрибут `data-field-name`, в котором хранится имя поля из базы данных.

Например строка таблицы:

```html
<tr>
	<td data-field-name="album_url">http://www.wikidata.org/entity/Q901854</td>
	<td data-field-name="album">Fly on the Wall</td>
	<td data-field-name="performer">AC/DC</td>
	<td data-field-name="genre">hard rock</td>
	<td data-field-name="year">1985</td>
</tr>
```

Соответствует записи в базе данных с тремя полями:

```javascript
{
	album_url: "http://www.wikidata.org/entity/Q901854",
	album: "Fly on the Wall",
	performer: "AC/DC",
	genre: "hard rock",
	year: "1985"
}
```

Вам необходимо написать функцию `filterTable("albums_table", {year: "2000"})`, которая принимает два параметра: ID HTML таблицы и объект с фильтрами. Ваша функция должна в таблице с указанным ID отфильтровать строки, оставив только те, которые удовлетворяют всем условиям фильтра. Строки, которые неудовлетворяют фильтру, должны быть спрятаны добавлением CSS класса `hidden` к тегу `<tr>`.

Данные фильтра представляют из себя объект, у которого ключи - это названия полей в  базе данных, а значения - строки. Например, если нужно отфильтровать только роковые альбомы (включая gothic rock, blues rock и другие), вышедшие в 1980 году, то будет вызван код:

```javascript
filterTable("albums_table", {year: "1980", genre: "rock"});
```

Задача 2
--------

Необходимо написать класс `SwitchButton`, который будет инкапсулировать визуальный компонент кнопки-переключателя. В HTML коде странице должен быть элемент:

```html
<div class="switch-button"
     id="chatPermissionsButton"
     data-options="all;friends;friends of friends;only me"
     data-default-value="all">
</div>
```

Атрибут `data-options` содержит список возможных надписей на кнопке, разделённые символом ';'.

Атрибут `data-default-value` (необязательный) - надпись, которая должна быть видна на кнопке по умолчанию..

Ваш класс `SwitchButton` должен создавать кнопку (HTML элемент `<input type="button"/>`) внутри `<div>` элемента следующим JavaScript кодом:

```javascript
var button = new SwitchButton("chatPermissionsButton");
button.getValue(); //Получить текущий текст на кнопке;
button.setValue("friends"); //Изменить текст на кнопке;
button.getDiv(); //Получить элемент DIV, внутри которого располагается кнопка;
button.switchValue(); //Переключить текст на кнопке, выбирая следующий из списка "options";
```

Текст на кнопке должен определяться следующим образом:
* Если в `localStorage` есть ключ `'SwitchButton_'` + `ID кнопки`, то значение из этого ключа используется на кнопке;
* Если есть аттрибут `data-default-value`, то он используется на кнопке;
* Если есть аттрибут `data-options`, то используется первый вариант из этого списка;
* Если ничего не подошло, то использовать `None`.
