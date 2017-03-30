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
