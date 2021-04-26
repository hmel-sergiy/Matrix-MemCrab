import React from 'react';
import { connect } from 'react-redux';
import { 
  addRow, 
  deleteRow, 
  incrementCell, 
  turnOnRowPercentageView,
  turnOfRowPercentageView,
  showCommonNumbers
} from '../../redux/actions/tableActions';
import './MatrixTable.css';

function MatrixTable({isModalOpen, percentageRowIndex, matrix, commonCells, ...props}) {
    return !isModalOpen ? (
      <table>
        <tbody>
          {matrix.getValue().map((row,i) => (
              <tr key={i} data-key={i}>
                { 
                  row.map((cell, j) =>{
                    let classList = 'cell ';
                    let mouseHoverCallback = props.showCommonNumbers.bind(null,cell);
                    let mouseLeaveCallback = null;
                    if(j === matrix.n){
                      mouseHoverCallback = props.turnOnRowPercentageView.bind(null,i);
                      mouseLeaveCallback = props.turnOnRowPercentageView;
                      classList += 'sum-cell';
                    }
                    else if(i === percentageRowIndex){
                      cell = `${(cell * 100 / row[matrix.n]).toFixed(0)}%`;
                    }
                    if(commonCells.includes(`${i}-${j}`)){
                      classList += 'common-cell';
                    }
                    return (
                      <td 
                        className={classList} 
                        key={j}
                        data-key={j}
                        onClick={j !== matrix.n ? props.incrementCell.bind(null,i,j) : null }
                        onMouseEnter={mouseHoverCallback}
                        onMouseLeave={mouseLeaveCallback}
                        style={i === percentageRowIndex ? {
                          background: `linear-gradient(0deg, rgba(0,0,255,.8) ${cell}, rgba(255,0,0,0) 1%)`
                        } : {}}
                      >{cell}</td>
                    )
                  })
                }
                <td 
                  className="cell delete" 
                  key={matrix.n + 1}
                  data-key={i}
                  onClick={props.deleteRow.bind(null,i)}
                >x</td>
              </tr>
            ))
          }
          <tr key={`${matrix.m}`}>
            {matrix.avgRow.map((cell,j) => (
              <td 
                className="cell avg-cell" 
                key={j}
                data-key={j}
              >{Number(cell).toFixed(2)}</td>
            ))}
            <td 
              className="cell add" 
              colSpan="2" 
              onClick={props.addRow} 
              key={`${matrix.n}`}
              data-key={`${matrix.n}`}
            >+</td>
          </tr>
        </tbody>
      </table>    
    ) : null;
}

const mapStateToProps = (state) => ({
  ...state.table,
  isModalOpen: state.modal.isModalOpen
});

const mapDispatchToProps = {
  addRow,
  deleteRow,
  incrementCell,
  turnOnRowPercentageView,
  turnOfRowPercentageView,
  showCommonNumbers
}

export default connect(mapStateToProps,mapDispatchToProps)(MatrixTable);
