import React, { useState } from 'react';

interface GeoJSONUploadProps {
    onUpload: (geojsonData: any) => void;
};

function GeoJSONUploader(props: GeoJSONUploadProps) {

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target) {
                    const geojsonData = JSON.parse(e.target.result as string);
                    props.onUpload(geojsonData);
                }
            };
            reader.readAsText(selectedFile);
        }
    };

    return (
        <div>
            <p>Velg en GeoJSON fil</p>
            <input type="file" accept=".geojson" onChange={handleFileChange} />
        </div>
    );
};

export default GeoJSONUploader;