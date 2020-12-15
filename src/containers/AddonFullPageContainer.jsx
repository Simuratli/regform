import React from "react";
import {connect} from "react-redux";
import AddonFullPage from "../components/AddonFullPage/AddonFullPage";
import {getFullAddonPage} from "../store/actions/fullAddonPageAction";
import {getDownloadFile} from "../store/actions/downloadFileAction";
import {getFile} from "../store/actions/fileAction";
import {resetData} from "../store/actions/resetData";
import {getLink} from "../store/actions/openButtonAction";
import AddonCard from "../components/AddonsCardsPage/AddonCard";

class AddonFullPageContainer extends React.Component {

    componentDidMount() {
        const slug = this.props.match.params.slug;
        this.props.getFullAddonPage(slug)
    }

    render() {
        console.log(this.props.fullAddonPage, "container")
        return (
            <>
                {
                    this.props.fullAddonPage && Object.keys(this.props.fullAddonPage).length !== 0 ?
                        <AddonFullPage addon={this.props.fullAddonPage}
                                       getDownloadHashFile={this.props.getDownloadHashFile}
                                       getDownloadFile={this.props.getFile}
                                       file={this.props.file}
                                       resetData={this.props.resetData}
                                       getLink={this.props.getLink}
                                       addOnPortalLink={this.props.addOnPortalLink}

                        /> : ''
                }
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        addOnPortalLink: state.addOnPortalLink.addOnPortalLink,
        fullAddonPage: state.fullAddonPage.fullAddonPage,
        fullAddonPageError: state.fullAddonPage.error,
        file: state.file
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getFullAddonPage: (slug) => dispatch(getFullAddonPage(slug)),
        getFile: () => {
            dispatch(getDownloadFile())
        },
        getDownloadHashFile: () => {
            dispatch(getFile())
        },
        resetData: () => {
            dispatch(resetData())
        },
        getLink: (slug) => {
            dispatch(getLink(slug))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddonFullPageContainer);
