<script>
/*Asumiendo que Math.floor((Math.random() * 100) + 1); saca elementos al azar entre 1 y 100, queremos que hagas lo siguiente:
    Saca 50 números al azar entre 1 y 100
    Almacena los números que salgan impares en un array impares
    Almacena los números que salgan pares en un array pares
*/
for(int i=0; i<50; i++){
	var numero = Math.floor((Math.random() * 100) + 1);
	var pares;
	var impares;
		if(numero%2 == 0) {
			pares.push(numero);
		} else {
			impares.push(numero);
		}
}
</script>