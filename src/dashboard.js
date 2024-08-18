function func(date){
    const cores = ['green', 'gray', 'plum', 'yellow','blue','lime','olive','red','silver',
        'pink','salmon','orange','gold','aqua','white','coral','black','brown','darkgreen','navy','slateblue',
        'teal','fuchsia','maroon','burlywood','peru','firebrick','floralwhite','aquamarine','turquoise','violet']    
    const data = []     
    for (let i = 0; i < date; i++) {
        data.push(Math.floor(Math.random() * (160000 - 140000 + 1)) + 140000)       
    }
    console.log(data)
}
func(12)