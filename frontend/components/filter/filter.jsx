import React from 'react';
require('../../../sass/filter.scss');

class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.updateFilters = this.updateFilters.bind(this);
    this.toggleFilter = this.toggleFilter.bind(this);
  }

  updateFilters(e) {
    let filter = e.target.value;
    if (e.target.checked) {
      this.props.addFilter(e.target.value);
    } else {
      this.props.removeFilter(e.target.value);
    }

  }

  toggleFilter() {
     let targ = document.getElementById('checkbox-ul');
    targ.className === 'hidden' ? targ.className = 'checkbox-ul' : targ.className ='hidden';
  }

  render() {
    return (
      <div className='checkbox-div' onClick={this.toggleFilter}>
        Filters
        <ul className='hidden' id='checkbox-ul'>
          <li><input type='checkbox' onChange={this.updateFilters} className='cbox' 
            checked={this.props.filters[1200] ? true : false} value='1200'/>Less than $20</li>
        <li><input type='checkbox' onChange={this.updateFilters} className='cbox'
          checked={this.props.filters['sleeve'] ? true: false} value='sleeve' />Sleeves</li>
        <li><input type='checkbox' onChange ={this.updateFilters} className='cbox'
          checked={this.props.filters['straw'] ? true: false} value='straw'/>Straws</li>
        <li><input type='checkbox' onChange={this.updateFilters} className='cbox'
          checked={this.props.filters['cufflinks'] ? true : false} value='cufflinks'/>Cufflinks</li>
        </ul>
      </div>
    );
  }

}


export default Filter;
