const mysql = require('mysql2')

let link = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'',
	database:'zawbazadanych'
})

link.connect( function(err){
	if(!!err){
		console.log('Error')
	} else {
		console.log('Connect')
	}
})

function get(){
	link.query("SELECT `id`,`name`,`desc` FROM documents", (err,rows,flds)=>{
	if(!!err)
		console.log('Some Error')
	else {
		console.log("Liczba wierszy: "+rows.length)
		console.log("Pole 'name': "+rows[0].name)
		console.log('---------------------------------')
		console.log(rows)
		return rows;
	}
})
}
let res = get()

function put(){
	let data = { id:0, name:'Jakiś tytuł', desc:'Trele Morele.net', TypeId:'1'}
	// link.query("INSERT INTO documents SET ?", data, (err,res)=>{
    link.query("INSERT INTO documents (id, name, desc, typeId) VALUES (?, ?, ?)", [data.id, data.name, data.desc, data.TypeId], (err, res) => {``
		console.log(err);
		console.log(res);

        link.close()
	})
}
put()
console.log('Query end')

