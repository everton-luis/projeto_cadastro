document.getElementById("formulario_cadastro").onsubmit = function(){
    var cpf = document.getElementById("cpf").value;
    var dataNascimento = document.getElementById("dataNascimento").value;

    function validarCPF(cpf) {	
        cpf = cpf.replace(/[^\d]+/g,'');	
        if(cpf == '') return false;	
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 || 
            cpf == "00000000000" || 
            cpf == "11111111111" || 
            cpf == "22222222222" || 
            cpf == "33333333333" || 
            cpf == "44444444444" || 
            cpf == "55555555555" || 
            cpf == "66666666666" || 
            cpf == "77777777777" || 
            cpf == "88888888888" || 
            cpf == "99999999999")
                return false;		
        // Valida 1o digito	
        add = 0;	
        for (i=0; i < 9; i ++)		
            add += parseInt(cpf.charAt(i)) * (10 - i);	
            rev = 11 - (add % 11);	
            if (rev == 10 || rev == 11)		
                rev = 0;	
            if (rev != parseInt(cpf.charAt(9)))		
                return false;		
        // Valida 2o digito	
        add = 0;	
        for (i = 0; i < 10; i ++)		
            add += parseInt(cpf.charAt(i)) * (11 - i);	
        rev = 11 - (add % 11);	
        if (rev == 10 || rev == 11)	
            rev = 0;	
        if (rev != parseInt(cpf.charAt(10)))
            return false;		
        return true;   
    }

    function checarData(dataNascimento){
        dataNascimentoCadastro = new Date(dataNascimento);
        var data_atual = new Date();

        var tempoDataNascimento = dataNascimentoCadastro.getTime();
        var tempo_data_atual = data_atual.getTime();

        if(tempo_data_atual < tempoDataNascimento){
            return false;
        }else{
            return true;
        }

    }
    

    if(!validarCPF(cpf)){
        alert('cpf invalido');
        return false;
        
    }

    if(!checarData(dataNascimento)){
        alert("nao é possivel cadastrar data de nascimento superior há data de hoje");
        return false;
    }

    

}