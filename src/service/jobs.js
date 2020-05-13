import firebase from '../../firebase'

export const findJobs = async () => {
  const response = await firebase.firestore()
  .collection('jobs')
  .get()

  const result = []
  response.forEach(job => {
    let jobData = job.data()
    let timestamp = new firebase.firestore
      .Timestamp(jobData.createdAt.seconds, jobData.createdAt.nanoseconds)
      .toDate()
      
      result.push({...jobData,createdAt: timestamp, id: job.id})
  })

  return result
}

export const findJobById = async (id) => {
  const response = await firebase.firestore()
    .collection('jobs')
    .doc(id)
    .get()

  return response.data()
}

export const findJobByAuthorId = async (id) => {
  const response = await firebase.firestore()
    .collection('jobs')
    .where('createdBy', '==', id)
    .get()
  
  const result = []
  response.forEach(doc => {
    result.push({
      ...doc.data(),
      id: doc.id
    })
  })
  return result
}

export const createJob = async (job) => {
  return await firebase.firestore()
    .collection('jobs')
    .add({
      ...job,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const updateJob = async (id, job) => {
  return await firebase.firestore()
    .collection('jobs')
    .doc(id)
    .set(job)
}

export const deleteJob = async (id) => {
  return await firebase.firestore()
    .collection('jobs')
    .doc(id)
    .delete()
}