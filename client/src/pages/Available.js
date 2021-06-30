import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AgentProperties from '../components/AgentProperties';
import PaginationTabs from '../components/PaginationTabs';

const Available = () => {
    const [agents, setAgents] = useState([])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    useEffect(()=>{
       
        getAgentsProperties()
    },{})

    const normalizeData = (agentProperties) => {

        const uniqAgentIDS =[...new Set(agentProperties.map(p=> p.agent_id))]

        console.log(uniqAgentIDS)
        const agentsData = []
 
        uniqAgentIDS.forEach( id => {
            // I have id of the agent
            let properties = agentProperties.filter( ap => ap.agent_id === id)
              // still in for each loop push each agent {fullName, email properties}
             // object to agents array
            let {agent_id, first_name, last_name, email} = properties[0]
            // this step is not 100% necassary but removes unused keys from
            // properties
            const cleanedProperties = properties.map(p => {
                return{street: p.street,
                       zip:p.zip,
                       state:p.state,
                       city:p.city,
                       sq_ft:p.sq_ft,
                       beds:p.beds,
                       baths:p.baths,
                       price:p.price
                    }
            })

            agentsData.push({
                agent_id, fullName: `${first_name} ${last_name}`, 
                email, 
                properties: cleanedProperties
            }
            )
        })
        console.log(agentsData)
        console.log('normalize data Done, setAgent (ie render to dom)')
        setAgents(agentsData)
    }

    const getAgentsProperties = async()=> {
        try {
            console.log('before api call')
            let res = await axios.get(`/api/properties?page=${page}`)
            console.log('after api call, starting to normalize data')
            setTotalPages(res.data.total_pages)
            normalizeData(res.data.agents)
        } catch (error) {
            console.log(error)
        }
    }
    const handlePageClick = (page) => {
        console.log(page)
        setPage(page)
        getAgentsProperties()
        // want to do api call here
    }
    return (
        <>
            <h1>Available pages:{totalPages}</h1>
            <PaginationTabs handleClick={handlePageClick}/> 
            {agents.map(a => (
                <AgentProperties key={Math.random()} {...a} />
            ))
            }

        </>
    )
}

export default Available