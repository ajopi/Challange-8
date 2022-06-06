import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import "./UploadBukti.css"
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'


export const UploadBukti = ({handleBerhasil, setFile}) => {
    // const [File, setFile] = useState([]);
    const [HandleStatus, setHandleStatus] = useState("");

    useEffect(() => {
        console.log(HandleStatus);
    }, [HandleStatus])

    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => {
        setHandleStatus(status);
        if (status === "done") {
            setFile(URL.createObjectURL(file));
        }
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files, "ini files");
        console.log(allFiles, "ini allFiles");
        setFile(URL.createObjectURL(files[0].file))
    }
    return (
        <div>
            <Card className='card-upload-bayar'>
                <Container className='container-content-upload'>
                    <strong className='txt-pembayaran-upload'>
                        Konfirmasi Pembayaran
                    </strong>
                    <div className='txt-upload'>
                        Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.
                    </div>

                    <strong className='txt-pembayaran-upload-2'>
                        Upload Bukti Pembayaran
                    </strong>

                    <div className='txt-upload'>
                        Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu
                    </div>

                    <Dropzone
                        getUploadParams={getUploadParams}
                        onChangeStatus={handleChangeStatus}
                        // onSubmit={handleSubmit}
                        accept="application/pdf"
                    />

                    <Button variant="primary" className='property-card-btn' onSubmit={handleSubmit} onClick={handleBerhasil}>Konfirmasi Pembayaran</Button>

                </Container>
            </Card>
        </div>
    )
}
