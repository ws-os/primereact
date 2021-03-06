import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PickList} from '../../components/picklist/PickList';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class PickListDemo extends Component {

    constructor() {
        super();
        this.state = {
            source: [], 
            target: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({source: data}));
    }
    
    onChange(event) {
        this.setState({
            source: event.source,
            target: event.target
        });
    }

    carTemplate(car) {
        var imageSource = 'showcase/resources/demo/images/car/' + car.brand + '.png';
        
        return (
            <div className="ui-helper-clearfix">
                <img src={imageSource} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px',width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>PickList</h1>
                        <p>PickList is used to reorder items between differents lists.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <PickList source={this.state.source} target={this.state.target} itemTemplate={this.carTemplate} 
                    sourceHeader="Available" targetHeader="Selected" responsive={true} 
                    sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
                    onChange={this.onChange}></PickList>
                </div>

                <PickListDoc/>
            </div>
        );
    }
}

export class PickListDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }
    
    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
<CodeHighlight className="javascript">
{`
import {PickList} from 'primereact/components/picklist/PickList';

`}
</CodeHighlight>

            <h3>Getting Started</h3>
            <p>PickList requires two arrays as the lists, a template for the item content and onChange callback to update the value after reorder or transfer.</p>
<CodeHighlight className="html">
{`
<PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate} 
    onChange={(e) => this.setState({source: e.source, target: e.target})} />

`}
</CodeHighlight>

            <h3>Responsive</h3>
            <p>In responsive mode, picklist adjusts its controls based on screen size. To activate this mode, set responsive as true.</p>
<CodeHighlight className="html">
{`
<PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate} 
    onChange={(e) => this.setState({source: e.source, target: e.target})} responsive={true}/>

`}
</CodeHighlight>

            <h3>Headers</h3>
            <p>sourceHeader and targetHeader properties are used to define captions for the lists that accept simple strings or JSX for custom content.</p>
            
<CodeHighlight className="html">
{`
<PickList source={this.state.cars} target={this.state.targetCars} itemTemplate={this.carTemplate} 
    onChange={(e) => this.setState({source: e.source, target: e.target})} sourceHeader="Available" targetHeader="Seleced"/>

`}
</CodeHighlight>

            <h3>Properties</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Default</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Unique identifier of the element.</td>
                        </tr>
                        <tr>
                            <td>source</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects for the source list.</td>
                        </tr>
                        <tr>
                            <td>target</td>
                            <td>array</td>
                            <td>null</td>
                            <td>An array of objects for the target list.</td>
                        </tr>
                        <tr>
                            <td>sourceHeader</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Text for the source list caption.</td>
                        </tr>
                        <tr>
                            <td>targetHeader</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Text for the target list caption.</td>
                        </tr>
                        <tr>
                            <td>style</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the element.</td>
                        </tr>
                        <tr>
                            <td>className</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Style class of the element.</td>
                        </tr>
                        <tr>
                            <td>sourceStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the source list element.</td>
                        </tr>
                        <tr>
                            <td>targetStyle</td>
                            <td>string</td>
                            <td>null</td>
                            <td>Inline style of the target list element.</td>
                        </tr>
                        <tr>
                            <td>responsive</td>
                            <td>boolean</td>
                            <td>false</td>
                            <td>When enabled orderlist adjusts its controls based on screen size.</td>
                        </tr>
                        <tr>
                            <td>showSourceControls</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to show buttons of source list.</td>
                        </tr>
                         <tr>
                            <td>showTargetControls</td>
                            <td>boolean</td>
                            <td>true</td>
                            <td>Whether to show buttons of target list.</td>
                        </tr>
                        <tr>
                            <td>itemTemplate</td>
                            <td>func</td>
                            <td>null</td>
                            <td>Function that gets the option and returns the content for it.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Events</h3>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Parameters</th>
                        <th>Description</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>onChange</td>
                            <td>event.originalEvent: Browser event <br />
                                event.source: Source list  <br />
                                event.target: Target list </td>
                            <td>Callback to invoke when items are moved from source to target.</td>
                        </tr>
                        <tr>
                            <td>onMoveToSource</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                            <td>Callback to invoke when items are moved from target to source.</td>
                        </tr>
                        <tr>
                            <td>onMoveAllToSource</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                            <td>Callback to invoke when all items are moved from target to source.</td>
                        </tr>
                        <tr>
                            <td>onMoveToTarget</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                            <td>Callback to invoke when items are moved from source to target.</td>
                        </tr>
                        <tr>
                            <td>onMoveAllToTarget</td>
                            <td>event.originalEvent: Browser event <br />
                                event.value: Moved items</td>
                            <td>Callback to invoke when all items are moved from source to target.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3>Styling</h3>
            <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming"> theming</Link> page.</p>
            <div className="doc-tablewrapper">
                <table className="doc-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Element</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ui-picklist</td>
                            <td>Container element.</td>
                        </tr>
                        <tr>
                            <td>ui-picklist-source-controls</td>
                            <td>Container of source list buttons.</td>
                        </tr>
                        <tr>
                            <td>ui-picklist-target-controls</td>
                            <td>Container of target list buttons.</td>
                        </tr>
                        <tr>
                            <td>ui-picklist-buttons</td>
                            <td>Container of buttons.</td>
                        </tr>
                        <tr>
                            <td>ui-picklist-listwrapper</td>
                            <td>Parent of a list element.</td>
                        </tr>
                        <tr>
                            <td>ui-picklist-list</td>
                            <td>List element.</td>
                        </tr>
                        <tr>
                            <td>ui-picklist-item</td>
                            <td>An item in the list.</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Dependencies</h3>
                <p>None.</p>
            </div>
            
            </TabPanel>

            <TabPanel header="Source">
                <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/picklist" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github"></i>
                    <span>View on GitHub</span>
                </a>
<CodeHighlight className="javascript">
{`
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PickList} from 'primereact/components/picklist/PickList';
import {CarService} from '../service/CarService';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';

export class PickListDemo extends Component {

    constructor() {
        super();
        this.state = {
            source: [], 
            target: []
        };
        this.carservice = new CarService();
        this.carTemplate = this.carTemplate.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.carservice.getCarsSmall().then(data => this.setState({source: data}));
    }
    
    onChange(event) {
        this.setState({
            source: event.source,
            target: event.target
        });
    }

    carTemplate(car) {
        var imageSource = 'showcase/resources/demo/images/car/' + car.brand + '.png';
        
        return (
            <div className="ui-helper-clearfix">
                <img src={imageSource} alt={car.brand} style={{ display: 'inline-block', margin: '2px 0 2px 2px',width:48 }} />
                <div style={{ fontSize: '14px', float: 'right', margin: '15px 5px 0 0' }}>{car.brand} - {car.year} - {car.color}</div>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>PickList</h1>
                        <p>PickList is used to reorder items between differents lists.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <PickList source={this.state.source} target={this.state.target} itemTemplate={this.carTemplate} 
                    sourceHeader="Available" targetHeader="Selected" responsive={true} 
                    sourceStyle={{height: '300px'}} targetStyle={{height: '300px'}}
                    onChange={this.onChange}></PickList>
                </div>
            </div>
        );
    }
}

`}
</CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        );
    }
}