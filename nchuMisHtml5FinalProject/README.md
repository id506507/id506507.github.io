# HTML5 期末作業

## 運用到的元素：

1. 修改網頁標題

2. 修改網頁的icon

3. **使用Google字型**
	- 套用Google所提供的字型。

4. **顯示現在的時間**
	- 使用JavaScript來讀取時間。

5. 側欄選單和導覽列
	- 側欄選單中增加了wave的效果，讓使用者知道自己選擇了什麼選項。

6. Grid
	- 增加了這一段程式碼就讓網頁的內容置中，增加可讀性。

7. Cards
	- 在主頁增加Cards，能讓使用者知道網頁有什麼功能。
	- 修改Cards的列，讓一行可以顯示3個Cards。

8. 頁腳
	- 使用頁腳來顯示資訊。
	- 置定頁腳，如果只有一點點資料時，也不會把container的內容縮小。

9. 表格
	- 用表格的形式表示資料。
	- 將欄位設定為百分比的顯示，在不同大小的裝置都可以使用。

10. Preload
	- 因為要等待Google表單回傳資料，為了讓使用者知道要等待回傳，而不是網頁當掉，因此會使用preload，當瀏覽器獲得資料，便會使用 "document.getElementById" 取代preload的程式碼。

11. **使用Tabletop.js**
	- 將Google表單的資料使用Tabletop.js傳到瀏覽器上，因為我要顯示的是公告，愈新的公告要放在前面，所以在設定回傳的資料時需要增加 "data.reverse();" ，把資料的順序顛倒。
	- 另外在填寫表單的JavaScript中，用getScript()代替window.open，提交表單的時候便會不會出現預設的成功畫面。增加window.alert提示使用者已新增公告

12. 使用超連結

13. 表單
	- 使用fieldset來將表單中的元素分開。
	- 使用legend來為fieldset定義標題。
	- 將每個欄位設定成required，可避免使用者忘了填寫某一個欄位。
	- 利用JavaScript來判斷使用者的輸入有沒有出錯。

14. **頁面跳轉**
	- 讓網頁跳到某一個指定的頁面。

15. Collapsible
	- 可以讓大筆的資料分類，更加可讀性。
	- 可以先設定將某一個集合active/popout，直接讓使用者看到selection的資料。

16. 使用Google Map API
	- 雖然網頁有地址，但使用者可能對地址沒有太大的概念，如果增加Google Map API，便可以讓使用者直接看到地點，規劃路線。