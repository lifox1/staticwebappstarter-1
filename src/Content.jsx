
import React, { useState, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import Upload from './Upload';
import OcrLangCner from './OcrLangCner';

const docs = [
    {
      "filename": "test/LMA04585-Lease-_Z (5).pdf",
      "ner": [
        {
          "text": "LMA04585",
          "category": "lease_num",
          "offset": 154,
          "length": 8,
          "confidenceScore": 0.98
        },
        {
          "text": "MA5793",
          "category": "lease_num",
          "offset": 176,
          "length": 6,
          "confidenceScore": 0.75
        },
        {
          "text": "SIS",
          "category": "landlord",
          "offset": 242,
          "length": 3,
          "confidenceScore": 0.67
        }
        
      ],
      "ocr": "STANDARD FORM 2 FEBRUARY 1965 EDITION US GOVERNMENT GENERAL SERVICES ADMINISTRATION LEASE FOR REAL PROPERTY FPR (41CFR) 1-16.601 DATE OF LEASE LEASE NO. LMA04585 Building No. MA5793 THIS LEASE, made and entered into this date by and between SIS Center, Inc. whose address is 1441 Main Street Springfield, MA 01103 and whose interest in the property hereinafter described is that of owner hereinafter called the Lessor, and the UNITED STATES OF AMERICA, hereinafter called the Government: WITNESSETH: The parties hereto for the considerations hereinafter mentioned, covenant and agree as follows: 1. LESSOR HEREBY LEASES TO THE GOVERNMENT AND THE GOVERNMENT HEREBY LEASES FROM THE LESSOR THE FOLLOWING DESCRIBED PREMISES: An area of 12,621 Rentable Square Feet (RSF), with a Common Area Factor of 15.0%, yielding 10,975 ANSI/BOMA Office Area (occasionally herein referred to as Usable) Square Feet located on the 10 floor at 1441 Main Street, Springfield, Massachusetts (hereinafter the \"Building\"), and further identified on the plans entitled \" Tenth Floor Plan\" attached hereto as Exhibit \"A\" along with 20 secure garage parking spaces located at 186 Chestnut Street and identified as \"Garage Parking Plan\" attached hereto as Exhibit \"B: along with an additional 16 on-site surface parking spaces. All parking, all improvements and all amenities being collectively hereinafter referred to as the Premises or the Leased Premises, all of which are leased to the Government together with any and all appurtenances, rights, privileges and easements now or hereafter benefiting, belonging or appertaining thereto, including without limitation use of all common areas and facilities, and rights of ingress and egress to the Building, the Leased Premises and all common areas and appurtenances, to be used for general Government purposes as determined by the General Services Administration. 2. TERM: TO HAVE AND TO HOLD the said Premises with their appurtenances for a term of ten (10) years (five [5] firm), commencing on the next business day, excluding Saturdays, Sundays and Federal Holidays, following the Delivery of the Leased Premises in full compliance with the terms and conditions of Paragraph 6 & 7 hereof (the \"Commencement Date\"), and ending ten years thereafter, unless further extended or terminated sooner as provided herein or as may be allowed at law or in equity (the Lease Term). Upon actual determination of the Commencement Date, and consequently the Lease Term, the Lessor and the Government shall confirm in writing the Commencement Date and the Termination Date of the Lease and the Government's acceptance of the Leased Premises by execution and delivery of a Supplemental Lease Agreement. 3. TERMINATION RIGHT: THE GOVERNMENT MAY TERMINATE this Lease in whole or in part at any time on or after the last day of the fifth (5th) year by giving at least one hundred-twenty (120) days' prior notice in writing to the Lessor and no rental shall accrue after the effective date of termination. Said one hundred- twenty (120) day period shall be computed commencing with the day after the date of mailing of the notice by the Government. 4. THE GOVERNMENT SHALL PAY to the Lessor, commencing on the Commencement Date and payable via Electronic Funds Transfer, rent as follows: Years One through Five: Annual Rent in the amount of $392, 101.00, payable in the amount of $32,675.08 per month in arrears, plus CPI escalations after the first year, if applicable; Years Six through Ten; Annual Rent of $299, 336.25 payable in the amount of $24,944.69 per month in arrears, plus CPI escalations, if applicable, to: SIS Center, Inc. 1441 Main Street 1 INITIALS: LESSOR GOV Springfield, MA 01103 Rent for a period of less than one month shall be prorated on a per diem basis. 5. COMMISSION AND COMMISSION CREDIT: The Lessor and the Broker have agreed to a cooperating lease commission of_of the firm term value of the lease. The total amount of the commission is The Lessor shall pay the Broker no additional commissions associated with this lease transaction. In accordance with the \"Broker Commission and Commission Credit\" paragraph, the Broker has agreed to forgo of the commission that it is entitled to receive in connection with this lease transaction (\"Commission Credit\"). The Commission Credit is . The Lessor agrees to pay the Commission less the Commission Credit to the Broker in accordance with the \"Broker Commission and Commission Credit\" paragraph in the SFO attached to and forming a part of this lease. The total amount due the Broker is payable upon lease commencement). payable upon lease execution, Notwithstanding Paragraph 4 of the Lease, the shell rental payments due and owing under this lease shall be reduced to fully recapture this Commission Credit. The reduction in shell rent shall commence with the first month of the rental payments and continue as indicated in this schedule for adjusted Monthly Rent: First month's Rental Payment of $32,675.08 minus prorated Commission Credit of adjusted First Month's Rent. equals Second Month's Rental Payment $32,675.08 minus prorated Commission Credit of equals adjusted Second Month's Rent. Third Month's Rental Payment $32,675.08 minus prorated Commission Credit of equals adjusted Third Month's Rent. Fourth Month's Rental Payment $32,675.08 minus prorated Commission Credit of equals adjusted Fourth Month's Rent. 6. THE LESSOR SHALL FURNISH TO THE GOVERNMENT, for the stated rental consideration specified in Paragraph 4 above and at no further cost or expense to the Government, the following: (a) The Leased Premises, and all appurtenances, rights and privileges as described in Paragraph 1 hereof; (b) All requirements including, but not limited to, all services, utilities, compliance activities and efforts, alterations, improvements, build-out (except for lump sum reimbursable items, if any), and maintenance, repair and replacement requirements, all as specified in or contemplated by Solicitation for Offers 7MA2082, dated June 4, 2008, (hereinafter, the \"SFO\"), which is attached hereto and by this reference made a part hereof; (c) All construction in accordance with the SFO, including, without limitation, all provisions of the Architectural Finish Section of the SFO and Government Layout Drawings, Finish and Door Schedules, to be incorporated herein by reference upon completion; (d) All provisions and specifications of the Lesson's initial proposal dated June 25, 2008, and revised revised proposals; proposal dated August 22, 2008, as submitted in response to the SFO and the Government's request for (e) All services, including, without limitation, construction drawings and specifications, engineering and architectural services, and all permitting and approval requirements as are necessary to effect the construction and delivery of the Leased Premises in accordance with the requirements described herein; and by this Lease. (f) All rights, reservations of rights, privileges and the like as specified in, described by, or contemplated 7. IN REFERENCE TO BUILDOUT AND DELIVERY of the Leased Premises, the Lessor agrees to the following: (a) In no event shall the Leased Premises be deemed to be ready for occupancy unless the same shall 2 INITIALS RN CHRIS LESSOR GOVT. comply fully with all provisions of this Lease, including, but not limited to, the substantial completion of all improvements, requirements and construction in accordance with the specifications contained in this Lease, the SFO and the Government Layout Drawings and Finish Schedules, as referenced above and all documents referenced in the SFO and this Lease. (b) The phrase \"substantial completion\" (or \"substantially complete\") shall mean that all work necessary to deliver the Leased Premises in accordance with each and every requirement and specification of this Lease, and all other appurtenant things necessary for the Government's access to the Leased Premises and the full occupancy, possession, use and enjoyment thereof, shall have been completed or obtained, including, without limitation, all required reviews, approvals, consents and permits including a certificate of occupancy for the Leased Premises allowing occupancy for each of the uses described in and by this Lease, excepting only such minor matters as do not interfere with or diminish such access, occupancy, possession, use or enjoyment. In no event will the Leased Premises be deemed \"substantially complete\" or ready for occupancy unless the security system for the Leased Premises is fully operational, as determined by the Tenant Agency and Contracting Officer. (c) The Lessor hereby agrees that, as regards delivery of the Leased Premises to the Government ready for occupancy (hereinafter, \"Delivery\"): (i) Time is of the essence, (ii) Lessor shall effect Delivery of the Tenant Improvements in eighty-five (85) working days from the written \"Notice to Proceed, to be mutually agreed upon by the Government and the Lessor upon completion of the the \"Delivery Date\"). Construction Drawings, following delivery of the Government Layout Drawings and Finish Schedules (hereinafter (iii) Except with regard to such \"Punch List\" items as may be identified in the Acceptance Notice as defined in Paragraph 7 (c)(v) hereof, it is a condition precedent to Delivery that all construction required under this Lease shall be substantially complete and comply"},
      {
        "filename": "test/LMA04585-Lease-_Z (5).pdf",
        "ner": [
          {
            "text": "LMA04585",
            "category": "lease_num",
            "offset": 154,
            "length": 8,
            "confidenceScore": 0.98
          },
          {
            "text": "MA5793",
            "category": "lease_num",
            "offset": 176,
            "length": 6,
            "confidenceScore": 0.75
          },
          {
            "text": "SIS",
            "category": "landlord",
            "offset": 242,
            "length": 3,
            "confidenceScore": 0.67
          }
          
        ],
        "ocr": "STANDARD FORM 2 FEBRUARY 1965 EDITION US GOVERNMENT GENERAL SERVICES ADMINISTRATION LEASE FOR REAL PROPERTY FPR (41CFR) 1-16.601 DATE OF LEASE LEASE NO. LMA04585 Building No. MA5793 THIS LEASE, made and entered into this date by and between SIS Center, Inc. whose address is 1441 Main Street Springfield, MA 01103 and whose interest in the property hereinafter described is that of owner hereinafter called the Lessor, and the UNITED STATES OF AMERICA, hereinafter called the Government: WITNESSETH: The parties hereto for the considerations hereinafter mentioned, covenant and agree as follows: 1. LESSOR HEREBY LEASES TO THE GOVERNMENT AND THE GOVERNMENT HEREBY LEASES FROM THE LESSOR THE FOLLOWING DESCRIBED PREMISES: An area of 12,621 Rentable Square Feet (RSF), with a Common Area Factor of 15.0%, yielding 10,975 ANSI/BOMA Office Area (occasionally herein referred to as Usable) Square Feet located on the 10 floor at 1441 Main Street, Springfield, Massachusetts (hereinafter the \"Building\"), and further identified on the plans entitled \" Tenth Floor Plan\" attached hereto as Exhibit \"A\" along with 20 secure garage parking spaces located at 186 Chestnut Street and identified as \"Garage Parking Plan\" attached hereto as Exhibit \"B: along with an additional 16 on-site surface parking spaces. All parking, all improvements and all amenities being collectively hereinafter referred to as the Premises or the Leased Premises, all of which are leased to the Government together with any and all appurtenances, rights, privileges and easements now or hereafter benefiting, belonging or appertaining thereto, including without limitation use of all common areas and facilities, and rights of ingress and egress to the Building, the Leased Premises and all common areas and appurtenances, to be used for general Government purposes as determined by the General Services Administration. 2. TERM: TO HAVE AND TO HOLD the said Premises with their appurtenances for a term of ten (10) years (five [5] firm), commencing on the next business day, excluding Saturdays, Sundays and Federal Holidays, following the Delivery of the Leased Premises in full compliance with the terms and conditions of Paragraph 6 & 7 hereof (the \"Commencement Date\"), and ending ten years thereafter, unless further extended or terminated sooner as provided herein or as may be allowed at law or in equity (the Lease Term). Upon actual determination of the Commencement Date, and consequently the Lease Term, the Lessor and the Government shall confirm in writing the Commencement Date and the Termination Date of the Lease and the Government's acceptance of the Leased Premises by execution and delivery of a Supplemental Lease Agreement. 3. TERMINATION RIGHT: THE GOVERNMENT MAY TERMINATE this Lease in whole or in part at any time on or after the last day of the fifth (5th) year by giving at least one hundred-twenty (120) days' prior notice in writing to the Lessor and no rental shall accrue after the effective date of termination. Said one hundred- twenty (120) day period shall be computed commencing with the day after the date of mailing of the notice by the Government. 4. THE GOVERNMENT SHALL PAY to the Lessor, commencing on the Commencement Date and payable via Electronic Funds Transfer, rent as follows: Years One through Five: Annual Rent in the amount of $392, 101.00, payable in the amount of $32,675.08 per month in arrears, plus CPI escalations after the first year, if applicable; Years Six through Ten; Annual Rent of $299, 336.25 payable in the amount of $24,944.69 per month in arrears, plus CPI escalations, if applicable, to: SIS Center, Inc. 1441 Main Street 1 INITIALS: LESSOR GOV Springfield, MA 01103 Rent for a period of less than one month shall be prorated on a per diem basis. 5. COMMISSION AND COMMISSION CREDIT: The Lessor and the Broker have agreed to a cooperating lease commission of_of the firm term value of the lease. The total amount of the commission is The Lessor shall pay the Broker no additional commissions associated with this lease transaction. In accordance with the \"Broker Commission and Commission Credit\" paragraph, the Broker has agreed to forgo of the commission that it is entitled to receive in connection with this lease transaction (\"Commission Credit\"). The Commission Credit is . The Lessor agrees to pay the Commission less the Commission Credit to the Broker in accordance with the \"Broker Commission and Commission Credit\" paragraph in the SFO attached to and forming a part of this lease. The total amount due the Broker is payable upon lease commencement). payable upon lease execution, Notwithstanding Paragraph 4 of the Lease, the shell rental payments due and owing under this lease shall be reduced to fully recapture this Commission Credit. The reduction in shell rent shall commence with the first month of the rental payments and continue as indicated in this schedule for adjusted Monthly Rent: First month's Rental Payment of $32,675.08 minus prorated Commission Credit of adjusted First Month's Rent. equals Second Month's Rental Payment $32,675.08 minus prorated Commission Credit of equals adjusted Second Month's Rent. Third Month's Rental Payment $32,675.08 minus prorated Commission Credit of equals adjusted Third Month's Rent. Fourth Month's Rental Payment $32,675.08 minus prorated Commission Credit of equals adjusted Fourth Month's Rent. 6. THE LESSOR SHALL FURNISH TO THE GOVERNMENT, for the stated rental consideration specified in Paragraph 4 above and at no further cost or expense to the Government, the following: (a) The Leased Premises, and all appurtenances, rights and privileges as described in Paragraph 1 hereof; (b) All requirements including, but not limited to, all services, utilities, compliance activities and efforts, alterations, improvements, build-out (except for lump sum reimbursable items, if any), and maintenance, repair and replacement requirements, all as specified in or contemplated by Solicitation for Offers 7MA2082, dated June 4, 2008, (hereinafter, the \"SFO\"), which is attached hereto and by this reference made a part hereof; (c) All construction in accordance with the SFO, including, without limitation, all provisions of the Architectural Finish Section of the SFO and Government Layout Drawings, Finish and Door Schedules, to be incorporated herein by reference upon completion; (d) All provisions and specifications of the Lesson's initial proposal dated June 25, 2008, and revised revised proposals; proposal dated August 22, 2008, as submitted in response to the SFO and the Government's request for (e) All services, including, without limitation, construction drawings and specifications, engineering and architectural services, and all permitting and approval requirements as are necessary to effect the construction and delivery of the Leased Premises in accordance with the requirements described herein; and by this Lease. (f) All rights, reservations of rights, privileges and the like as specified in, described by, or contemplated 7. IN REFERENCE TO BUILDOUT AND DELIVERY of the Leased Premises, the Lessor agrees to the following: (a) In no event shall the Leased Premises be deemed to be ready for occupancy unless the same shall 2 INITIALS RN CHRIS LESSOR GOVT. comply fully with all provisions of this Lease, including, but not limited to, the substantial completion of all improvements, requirements and construction in accordance with the specifications contained in this Lease, the SFO and the Government Layout Drawings and Finish Schedules, as referenced above and all documents referenced in the SFO and this Lease. (b) The phrase \"substantial completion\" (or \"substantially complete\") shall mean that all work necessary to deliver the Leased Premises in accordance with each and every requirement and specification of this Lease, and all other appurtenant things necessary for the Government's access to the Leased Premises and the full occupancy, possession, use and enjoyment thereof, shall have been completed or obtained, including, without limitation, all required reviews, approvals, consents and permits including a certificate of occupancy for the Leased Premises allowing occupancy for each of the uses described in and by this Lease, excepting only such minor matters as do not interfere with or diminish such access, occupancy, possession, use or enjoyment. In no event will the Leased Premises be deemed \"substantially complete\" or ready for occupancy unless the security system for the Leased Premises is fully operational, as determined by the Tenant Agency and Contracting Officer. (c) The Lessor hereby agrees that, as regards delivery of the Leased Premises to the Government ready for occupancy (hereinafter, \"Delivery\"): (i) Time is of the essence, (ii) Lessor shall effect Delivery of the Tenant Improvements in eighty-five (85) working days from the written \"Notice to Proceed, to be mutually agreed upon by the Government and the Lessor upon completion of the the \"Delivery Date\"). Construction Drawings, following delivery of the Government Layout Drawings and Finish Schedules (hereinafter (iii) Except with regard to such \"Punch List\" items as may be identified in the Acceptance Notice as defined in Paragraph 7 (c)(v) hereof, it is a condition precedent to Delivery that all construction required under this Lease shall be substantially complete and comply"}
  
    ]


export default function Content() {

    const [selectedMenuItem, setSelectedMenuItem] = useState("upload documents");
    const [documents, setDocuments] = useState(docs)

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