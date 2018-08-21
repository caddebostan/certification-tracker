import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { ClickableList } from '../../../components';

/*
*            Props Name        Description                                     Value
*@props -->  props name here   description here                                Value Type Here
*
*/

class PlaningView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableData: [],
      tableHead: [],
    };
  }

  // Component Life Cycles
  componentWillMount() {
    // TODO: when we got data from our database all this things sholuld be fix.
    this.setState({
      tableData: [
        ['6', 'Ugur', 'Ugur ERDAL', 'Trabzon', 'Bekliyor'],
        ['3', 'Honda', 'Selami', 'Manisa', 'Ucret'],
        ['5', 'Novartis', 'Ahmet Mehmet', 'Sakarya', 'Planlamada'],
        ['2', 'Otolastik', 'Nabi', 'Istanbul', 'Bekliyor'],
        ['4', 'Philip', 'Mustafa', 'Antalya', 'Teklif'],
        ['1', 'Netas', 'Sahin', 'Samsun', 'Bekliyor'],
      ],
      tableHead: ['No', 'Firma Adi', 'Yetkili', 'Adresi', 'Durum'],
    });
  }

  // Component Functions

  _handleOnRowClick = id => {
    console.log(id);
    this.props.history.push('/planlama/form');
    const uu = id;
    const ss = uu;
  };

  render() {
    const { tableData, tableHead } = this.state;

    return (
      <ClickableList
        tableData={tableData}
        tableHead={tableHead}
        title="Planlama"
        subTitle="Planlanacak basvuruyu seciniz."
        tableHeaderColor
        handleOnRowClick={this._handleOnRowClick}
      />
    );
  }
}

PlaningView.propTypes = {
  history: PropTypes.object.isRequired,
};

export default PlaningView;
