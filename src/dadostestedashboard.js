export function DataDash(mes){

    function Dadosteste(data) {
        console.log("a")
        const dados = [];
        const porcentagem = [];
        const final = [];
        const cores = ['green', 'gray', 'plum', 'yellow','blue','lime','olive','red','silver',
            'pink','salmon','orange','gold','aqua','white','coral','black','brown','darkgreen','navy','slateblue',
            'teal','fuchsia','maroon','burlywood','peru','firebrick','floralwhite','aquamarine','turquoise','violet']   
    
    
        for (let i = 0; i < data; i++) {
            dados.push(Math.floor(Math.random() * (180000 - 80000 + 1)) + 100000);
        }
    
    
        const total = dados.reduce((accumulator, value) => accumulator + value, 0);
    
    
        dados.forEach(res => porcentagem.push(`${((res / total) * 100).toFixed(2)}%`));
    
      
        const minimo = Math.min(...dados);
        const maximo = Math.max(...dados);
        const media = total / dados.length;
        const somaQuadrados = dados.reduce((a, b) => a + Math.pow(b - media, 2), 0);
        const variancia = somaQuadrados / (dados.length - 1);
    
        for (let index = 0; index < dados.length; index++) {
            final.push([index, dados[index], cores[index] || '', porcentagem[index]]);
        }
    
        return {
            final,
            total,
            minimo,
            maximo,
            media: media.toFixed(2),
            variancia: variancia.toFixed(2)
        };
        
    }

    const date = new Date();
    const currentYear = date.getFullYear();
    const today = date.getDate();
    const currentMonth = date.getMonth()+1
    console.log(`${currentMonth}${today}${currentYear}`)
    let datames =[]
    let index = 0;
    for (;index < 31; index++) {
        if(index+today == 31){
            index=0
        }
        datames.push(index+today)
    }


}
