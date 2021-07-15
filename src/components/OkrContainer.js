import React, { useEffect, useState } from 'react';
import Collapse from './ui/Collapse';
import OkrFilter from './OkrFilter';
import OkrMenu from './OkrMenu';
import OkrMenuItem from './OkrMenuItem';
import ErrorBoundary from './ui/ErrorBoundary';
import { transformOkrJson } from '../utils';
import { useFetch } from '../hooks/useFetch';
import '../styles/App.css';

const OkrContainer = () => {
    const [okrs, setOkrs] = useState({});
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState('');
    const { response, isLoading } = useFetch({ url: "https://okrcentral.github.io/sample-okrs/db.json" });

    useEffect(() => {
        if (response) {
            const [okrMap, categories] = transformOkrJson(response.data);
            setCategories(categories);
            setOkrs(okrMap);
        }
    }, [response]);

    const handleChange = (selection) => {
        setValue(selection);
    }

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <ErrorBoundary>
            <div className="container">
                {
                    <OkrFilter value={value} callback={handleChange} categories={categories} />
                }
                {Object.values(okrs).filter((okr) => {
                    if (okr) {
                        return (okr.id && okr.category === (value || okr.category));
                    } else {
                        return false;
                    }

                }).map((okr, index) =>
                    <Collapse key={okr.id} component={<OkrMenu okr={okr} index={index} />}>
                        {<OkrMenuItem okr={okr} />}
                    </Collapse>
                )}
            </div>
        </ErrorBoundary>
    )
}

OkrContainer.propTypes = {
};

export default OkrContainer;