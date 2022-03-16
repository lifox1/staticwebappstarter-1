
import React, { useState, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './Upload';
import OcrLangCner from './OcrLangCner';

export default function Content() {

    const [selectedMenuItem, setSelectedMenuItem] = useState("upload documents");
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
    const onMenuOcrLangCner = async () => {
        console.log('click')
        setSelectedMenuItem("ocr lang cner")
    }

    const renderContent = () => {
        switch(selectedMenuItem){
            case 'upload documents' :
                return (<Upload />)
            case 'ocr lang cner' :
                return (<OcrLangCner documents={documents}/>)
            default:
                return (<>error {documents}</>)
        }
    }

    return (
        <div className="content" >

            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem onClick={onMenuUploadDocumentsClick}>Upload Documents</MenuItem>
                    <SubMenu title="Extraction Patterns" >
                        <MenuItem>OCR + Language Studio NER</MenuItem>
                        <MenuItem onClick={onMenuOcrLangCner}>OCR + Language Studio Custom NER</MenuItem>
                        <MenuItem>Form Recognizer : General Document</MenuItem>
                    </SubMenu>
                    <SubMenu title="Classification Patterns" />
                    <SubMenu title="Translation Patterns" />
                    <SubMenu title="Summarization Patterns" />
                </Menu>
            </ProSidebar>

            <div className="content center" >
                {renderContent()}
            </div>
        </div>
    )

}