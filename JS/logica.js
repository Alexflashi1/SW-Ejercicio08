var num = new Array();
      document.write("<h2>Los números ingresados son<br>");
      //Ingresar los diez valores numéricos   
      for(i = 0; i < 10; i++) {
         num[i] = parseInt(prompt('Ingresa 10 números, por favor solo números'));
         //Mostrar los números impresos
         document.write(num[i]+"<br>");
      }
        
        //Función para ordenar los números con el método burbuja
        function burbuja(num){
          for(var i=1;i<num.length;i++){
             for(var j=0;j<(num.length-i);j++){
                if(num[j]>num[j+1]){
                   k=num[j+1];
                   num[j+1]=num[j];
                   num[j]=k;
                }
             }
          }
          //sirve para que este valor pueda ser utitilizado por otras funciones
      return num;
       }
       
       num=burbuja(num);
          
       for(i=0;i<num.length;i++)
       {
          
       }
       //imprime los numeros acendentes mediante el método sout...
       document.write(num.sout(num));
        //Se invierte el orden de los números de ascendente a descendente
       num.reverse(num);
       document.write(num.reverse(num));
       //función que llama a imprimir los valores de manera ascedente
function ascender(){
   alert('El orden ascendente es:  '+num);

}
//función que imprime los valores de manera descendente
function descender(){
   alert('El orden descendente es:  '+num.reverse(num));

}