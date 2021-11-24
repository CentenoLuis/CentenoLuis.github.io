class Ui {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}" >
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-pill bg-primary">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-pill bg-secondary">Public gists: ${user.public_gists}</span>
                    <span class="badge badge-pill bg-success">Followers: ${user.followers}</span>
                    <span class="badge badge-pill bg-info">Following: ${user.following}</span>
                    <br> <br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blogo: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    clearProfile() {
        this.profile.innerHTML = ``;
    }

    showAlert() {
        this.profile.innerHTML = `
        <div class="alert alert-dismissible alert-warning">
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <h4 class="alert-heading">Warning!</h4>
        <p class="mb-0">Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" class="alert-link">vel scelerisque nisl consectetur et</a>.</p>
        </div>
        `;
    }
}