async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  console.log(title)
  const content = document.querySelector('textarea[name="post-content"]').value.trim();
  console.log(content)
  const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          content
      }),
      headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
      document.location.replace('/dashboard/');
  }
  else {
      alert(response.statusText);
  }
}

document.querySelector('.form-edit-post').addEventListener('submit', editFormHandler);