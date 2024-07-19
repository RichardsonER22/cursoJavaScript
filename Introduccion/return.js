const operaciones=(tipo,numero1, numero2)=>{



    if(tipo==='suma'){
        return numero1+numero2;
    } else if (tipo==='resta'){
      return numero1-numero2;
    }
   
    };

    const miVariable= operaciones('suma',110,11);
    console.log(miVariable);
