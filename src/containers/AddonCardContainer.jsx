import React from "react";
import AddonCard from "../components/AddonsCardsPage/AddonCard";
import {connect} from "react-redux";
import {getAddonCard} from "../store/actions/addonCardAction";
import {getDownloadFile} from "../store/actions/downloadFileAction";
import {getFile} from "../store/actions/fileAction";
import {resetData} from "../store/actions/resetData";
import {getDownloadFileCard} from "../store/actions/downloadFileCardAction";


class AddonCardContainer extends React.Component {

    componentDidMount() {
        this.props.getAddonCard()
    }

    render() {
        this.props.addonCard.cards.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
        return (
            <>
                {this.props.addonCard && this.props.addonCard.cards && this.props.addonCard.cards.map(item =>
                    <AddonCard addon={item}
                               getDownloadHashFile={this.props.getFile}
                               getDownloadFile={this.props.getDownloadFile}
                               file={this.props.file}
                               resetData={this.props.resetData}
                               getDownloadFileCard={this.props.getDownloadFileCard}
                    />)}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addonCard: state.addonCard,
        file: state.file
    }
}

const mapDispatchToProps = {
    getAddonCard,
    getDownloadFile,
    getFile,
    resetData,
    getDownloadFileCard
}

export default connect(mapStateToProps, mapDispatchToProps)(AddonCardContainer);
