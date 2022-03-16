
import React, { useState, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './Upload';

export default function Content() {

    const [selectedMenuItem, setSelectedMenuItem] = useState("upload documents");
    //const [document, setDocument] = useState(null)
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        fetch('/api/leases')
            .then(response => response.json())
            .then(data => {
                console.log(JSON.stringify(`data: ${data}`))
                setDocuments(data)
            })
    }, []);

    const onMenuUploadDocumentsClick = async () => {
        console.log('click')
        setSelectedMenuItem("upload documents")
    }

    const renderContent = () => {
        if (selectedMenuItem === 'upload documents')
            return (<Upload />)
        else
            return (<>other stuff {documents}</>)
    }

    return (
        <div className="content" >

            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem onClick={onMenuUploadDocumentsClick}>Upload Documents</MenuItem>
                    <SubMenu title="Extraction Patterns" >
                        <MenuItem>OCR + Language Studio NER</MenuItem>
                        <MenuItem>OCR + Language Studio Custom NER</MenuItem>
                        <MenuItem>Form Recognizer : General Document</MenuItem>
                    </SubMenu>
                    <SubMenu title="Classification Patterns" >
                        
                    </SubMenu>
                </Menu>
            </ProSidebar>

            <div className="content center" >
                {renderContent()}
            </div>
        </div>
    )

}