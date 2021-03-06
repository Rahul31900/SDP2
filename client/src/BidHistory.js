import React, { Component } from 'react';

class BidHistory extends Component {
	
	 render() { 
	 	var self = this;
	 	var historyList = Object.keys(this.props.bidHistory).map(function(key) {
	 		return <li className="list-group-item" key={key}><span>{key}</span> <span style={{float:'right'}}>₹{self.props.bidHistory[key]}</span></li>
	 	});
	 	return (
	 			
      			<div className="col-md-12">
      			   <ul className="bid-history-list list-group">
      			   <li className="list-group-item" ><span>rent</span> <span style={{float:'right'}}>rent amount</span></li>
                   	{historyList}
                   </ul>
      			</div>
          		
	 		);
	 }
	

}

export default BidHistory;