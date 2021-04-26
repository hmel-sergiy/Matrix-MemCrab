class Matrix{
    value = [];
    avgRow = [];
    n = 0;
    m = 0;
    x = 0;

    constructor(...props) {
        if(props.length === 1 && typeof props[0] === 'object'){
            return Object.assign(Object.create(Object.getPrototypeOf(this)), props[0])
        }
        else if(props.length === 3){
            [this.m,this.n,this.x] = props;
            this.value = this.generateMatrix();
            this.countAvg();
        }
        else {
            return {}
        }
        
    }

    generateRow(a) {
        const newRow = Array.from({length:this.n}, () => Math.floor(Math.random()*100));
        const rowSum = newRow.reduce((acc,cell) => acc + cell, 0);
        newRow.push(rowSum);
        return newRow;
    }    

    countAvg(){
        this.avgRow = [];
        for(let width = this.n; width--;){
            let sum = 0;
            for(let height = this.m; height--;){
                sum += this.value[height][width];
            }
            this.avgRow.unshift(sum/this.m);
        }
    }
    

    generateMatrix() {
        return Array.from({length:this.m}, () =>  this.generateRow())
    }

    getValue(){
        return this.value;
    }

    addRow(){
        const newRow = this.generateRow();
        this.value.push(newRow);
        this.m++
        this.countAvg();
    }

    deleteRow(index){
        delete this.value[index];
        this.value = this.value.filter(row => !!row);
        this.m--;
        this.countAvg();
    }

    incrementCell(i,j){
        this.value[i][j]++;
        this.value[i][this.n]++;
        this.countAvg();
    }



    findClosestCellsIndexes(num){
        let arr = [].concat(...this.value.map(row =>{
                const rowWithoutSum =  [...row];
                rowWithoutSum.pop(); //remove last last column (row sum value)
                return rowWithoutSum;
            } 
        ));

        const arrayOfIndexes = Object.keys(arr);
        for(let i = 0; i < arr.length; i++ ){  
            for(let j = 0; j < arr.length; j++ ){
                if(Math.abs(arr[arrayOfIndexes[i]] - num) < Math.abs(arr[arrayOfIndexes[j]] - num)){
                    let temp = arrayOfIndexes[i];
                    arrayOfIndexes[i] = arrayOfIndexes[j];
                    arrayOfIndexes[j] = temp;
                }
            }
        }

        const maxImpossibleX = this.x < this.m * this.n ? this.x: this.m *this.n; 
        return arrayOfIndexes.slice(0, maxImpossibleX + 1).map(e => {
            const j = e % this.n;
            const i = (e - j) / this.n;
            return `${i}-${j}`;
        });
    }
}

export default Matrix;